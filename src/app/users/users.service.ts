import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { switchMap, finalize, first } from 'rxjs/operators';
import { PetService } from '../pets/pet.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private pet: PetService,
    private fs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  hardUpdateUser(oldId, uid, user): Observable<void> {
    user.id = uid;
    this.pet.updatePetsOwner(oldId, uid);
    let x = from(
      this.fs
        .collection('users')
        .doc(user.id)
        .set(user, { merge: true })
    );
    return x.pipe(
      switchMap(() => {
        return from(
          this.fs
            .collection('users')
            .doc(oldId)
            .delete()
        );
      })
    );
  }

  registerUser(user) {
    user.id = this.fs.createId();
    return this.setClient(user);
  }

  setClient(user) {
    return this.fs
    .collection('users')
    .doc(user.id)
    .set(user, { merge: true });
  }

  getClients(): Observable<any[]> {
    return this.fs
      .collection('users', ref => ref.where('isAdmin', '==', false))
      .valueChanges();
  }

  getVets() {
    return this.fs
      .collection('users', ref => ref.where('isAdmin', '==', true))
      .valueChanges();
  }

  getUsersByEmail(email) {
    return this.fs
      .collection('users', ref => ref.where('email', '==', email))
      .valueChanges();
  }

  getClientById(id: string): Observable<any> {
    return this.fs
      .collection('users', ref => ref.where('isAdmin', '==', false))
      .doc(id)
      .valueChanges();
  }

  getUserById(id: string) {
    return this.fs
      .collection('users')
      .doc(id)
      .valueChanges();
  }

  saveClientPicture(picture: File, client) {
    const filePath = `clients/${client.id}.jpg`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, picture);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef
            .getDownloadURL()
            .pipe(first())
            .subscribe(URL => {
              client.photo = URL;
              this.setClient(client);
            });
        })
      )
      .subscribe();
  }
}

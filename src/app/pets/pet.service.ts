import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { first, finalize, map, switchMap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(
    private fs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getPetsByClient(clientId): Observable<any> {
    return this.fs
      .collection('pets', ref => ref.where('ownerId', '==', clientId))
      .valueChanges();
  }

  getPetById(id: string): Observable<any> {
    return this.fs
      .collection('pets')
      .doc(id)
      .valueChanges();
  }

  getPets(): Observable<any[]> {
    return this.fs.collection('pets').valueChanges();
  }

  createPet(pet): Observable<any> {
    pet.id = this.fs.createId();
    let x = from(this.setPet(pet));
    return x.pipe(
      map(() => {
        return pet;
      })
    );
  }

  setPet(pet): Promise<void> {
    return this.fs
      .collection('pets')
      .doc(pet.id)
      .set(pet, { merge: true });
  }

  updatePetsOwner(ownerId, newOwnerId) {
    this.getPetsByClient(ownerId)
      .pipe(first())
      .subscribe(pets => {
        pets.forEach(pet => {
          pet.ownerId = newOwnerId;
          this.setPet(pet);
        });
      });
  }

  savePetPicture(picture: File, pet) {
    const filePath = `pets/${pet.id}.jpg`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, picture);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().pipe(first()).subscribe(URL => {
            pet.photo = URL;
            this.setPet(pet);
          });
        })
      )
      .subscribe();
  }
}

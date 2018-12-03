import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private fs: AngularFirestore) {}

  hardUpdateUser(oldId, uid, user): Observable<void> {
    user.id = uid;
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
    return this.fs
      .collection('users')
      .doc(user.id)
      .set(user, { merge: true });
  }

  getClients() {
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

  getClientById(id: string) {
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
}

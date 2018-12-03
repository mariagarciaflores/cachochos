import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private fs: AngularFirestore) {}

  getPetsByClient(clientId) {
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

  getPets() {
    return this.fs.collection('pets').valueChanges();
  }

  createPet(pet) {
    pet.id = this.fs.createId();
    return this.fs
      .collection('pets')
      .doc(pet.id)
      .set(pet, { merge: true });
  }
}

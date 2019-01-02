import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClinicalRecordsService {
  constructor(private fs: AngularFirestore) {}

  getClinicalRecordByPet(petId) {
    return this.fs
      .collection('medical-records', ref => ref.where('petId', '==', petId))
      .valueChanges();
  }

  createClinicalRecord(clinicalRecord) {
    clinicalRecord.id = this.fs.createId();
    return this.fs
      .collection('medical-records')
      .doc(clinicalRecord.id)
      .set(clinicalRecord, { merge: true });
  }
}

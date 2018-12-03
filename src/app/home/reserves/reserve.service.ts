import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(private fs: AngularFirestore, private router: Router) {}

  createReserve(reserve): void {
    reserve.id = this.fs.createId();
    this.setReserve(reserve).then(() =>
      this.router.navigate(['reserve-confirmation', reserve.id])
    );
  }

  getReserveById(reserveId) {
    return this.fs
      .collection('reservations')
      .doc(reserveId)
      .valueChanges();
  }

  getReservesByDateAndVet(startDate, endDate, vetId) {
    return this.fs
      .collection('reservations', ref =>
        ref
          .where('vetId', '==', vetId)
          .where('date', '>=', startDate)
          .where('date', '<', endDate)
      )
      .valueChanges();
  }

  getReservesByDate(startDate, endDate) {
    return this.fs
      .collection('reservations', ref =>
        ref
          .where('date', '>=', startDate)
          .where('date', '<', endDate)
      )
      .valueChanges();
  }

  getReservations() {
    return this.fs
      .collection('reservations', ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  updateReserve(reserve):Promise<void> {
    return this.setReserve(reserve);
  }

  private setReserve(reserve): Promise<void> {
    return this.fs
      .collection('reservations')
      .doc(reserve.id)
      .set(reserve, { merge: true });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vet-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.scss']
})
export class ReserveListComponent implements OnInit {
  reserveList: Array<any>;

  constructor() {
    this.reserveList = [
      {
        reserveUser: 'Mauricio Arce',
        clientName: 'Mauricio Arce',
        reserveDate: '29/11/2018 15:30',
        serviceType: 'Esterilización',
        veterinary: 'Juan Martinez',
        reserveState: 'Reservado'
      },
      {
        reserveUser: 'José Luis Fuentes',
        clientName: 'Rocio Torrico',
        reserveDate: '29/11/2018 11:30',
        serviceType: 'Consulta General',
        veterinary: 'Eliana Meneses',
        reserveState: 'Reservado'
      }
    ];
  }

  ngOnInit() {}
}

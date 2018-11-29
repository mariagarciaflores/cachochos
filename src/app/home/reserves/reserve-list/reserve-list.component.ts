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
        reserveCode: 'JHYGR777',
        clientName: 'Mauricio Arce',
        cellphone: 77996059,
        reserveDate: '29/11/2018 11:30',
        serviceType: 'Esterilización',
        veterinary: 'Juan martinez',
        reserveCreationDate: '25/11/2018 22:00',
        reserveState: 'Reservado'
      },
      {
        reserveCode: 'JHYGR777',
        clientName: 'Mauricio Arce',
        cellphone: 77996059,
        reserveDate: '29/11/2018 11:30',
        serviceType: 'Esterilización',
        veterinary: 'Juan martinez',
        reserveCreationDate: '25/11/2018 22:00',
        reserveState: 'Reservado'
      },
      {
        reserveCode: 'JHYGR777',
        clientName: 'Mauricio Arce',
        cellphone: 77996059,
        reserveDate: '29/11/2018 11:30',
        serviceType: 'Esterilización',
        veterinary: 'Juan martinez',
        reserveCreationDate: '25/11/2018 22:00',
        reserveState: 'Reservado'
      },
      {
        reserveCode: 'JHYGR777',
        clientName: 'Mauricio Arce',
        cellphone: 77996059,
        reserveDate: '29/11/2018 11:30',
        serviceType: 'Esterilización',
        veterinary: 'Juan martinez',
        reserveCreationDate: '25/11/2018 22:00',
        reserveState: 'Reservado'
      }
    ];
  }

  ngOnInit() {}
}

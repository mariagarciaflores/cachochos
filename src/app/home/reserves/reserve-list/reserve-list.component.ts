import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReserveService } from '../reserve.service';
import { first } from 'rxjs/operators';
import * as M from 'materialize-css';

declare const $: any;

@Component({
  selector: 'vet-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.scss']
})
export class ReserveListComponent implements OnInit {
  reserveList: Array<any>;
  search: string;
  date: Date;

  constructor(private reserveService: ReserveService) {
    this.fillAllReservations();
  }

  ngOnInit() {
    $(() => {
      this.initializeDatePicker();
    });
  }

  searchUser(): void {
    this.reserveList.forEach(reserve => {
      reserve.visible = reserve.reserveUserName
        .toLowerCase()
        .includes(this.search.toLowerCase());
    });
    if (this.search === '') {
      this.reserveList.forEach(reserve => {
        reserve.visible = true;
      });
    }
  }

  updateByDate() {
    this.fillAllReservations();
  }

  changeStatus(reserve): void {
    reserve.status = 'Completado';
    this.reserveService.updateReserve(reserve);
  }

  private fillAllReservations() {
    this.reserveService
      .getReservations()
      .pipe(first())
      .subscribe(reserves => {
        reserves.forEach(reserve => {
          reserve.visible = true;
        });
        this.reserveList = reserves;
      });
  }

  private initializeDatePicker() {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      disableWeekends: true,
      onSelect: date => {
        var startDate = new Date(this.cloneObject(date));
        var endDate = new Date(this.cloneObject(date));
        startDate.setHours(0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        endDate.setHours(0, 0, 0);
        console.log(startDate, endDate);
        this.reserveService
          .getReservesByDate(startDate, endDate).pipe(first())
          .subscribe(reservations => {
            reservations.forEach(reserve => {
              reserve.visible = true;
            });
            this.reserveList = reservations;
          });
      },
      i18n: {
        cancel: 'Cancelar',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
      }
    });
  }

  private cloneObject(src: any) {
    return JSON.parse(JSON.stringify(src));
  }
}

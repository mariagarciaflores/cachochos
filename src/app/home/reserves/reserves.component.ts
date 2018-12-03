import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { UsersService } from 'src/app/users/users.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ReserveService } from './reserve.service';

const reserveHours = [
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30'
];

@Component({
  selector: 'vet-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {
  reserve: any;
  serviceType: string;
  serviceHour: string;
  loggedUser: any;
  vets: Array<any>;

  constructor(
    private userService: UsersService,
    private reserveService: ReserveService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.reserve = {};
    this.vets = [];
    this.initializeDatePicker();
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeDatePicker();
    });
    this.auth
      .getLoggedUser()
      .pipe(first())
      .subscribe(user => {
        this.loggedUser = user;
        this.setNewReserve();
      });
  }

  searchVets() {
    if (this.reserve.date && this.serviceType) {
      this.userService
        .getVets()
        .pipe(first())
        .subscribe(vets => {
          this.vets = vets;
          this.vets.forEach(vet => {
            this.checkVetAvailableHours(vet);
          });
        });
    }
  }

  private updateSelect() {
    setTimeout(() => {
      var elems = document.querySelectorAll('.select-hours');
      M.FormSelect.init(elems, {});
    }, 10);
  }

  private checkVetAvailableHours(vet) {
    var startDate = new Date(this.cloneObject(this.reserve.date));
    var endDate = new Date(this.cloneObject(this.reserve.date));
    startDate.setHours(0, 0, 0);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(0, 0, 0);
    vet.availableHours = reserveHours.slice(0);
    this.reserveService
      .getReservesByDateAndVet(startDate, endDate, vet.id)
      .pipe(first())
      .subscribe(reserves => {
        reserves.forEach(reserve => {
          vet.availableHours.forEach(hour => {
            var reservedHour = reserve.date.toDate().getHours();
            var reservedMinutes =
              reserve.date.toDate().getMinutes() === 0
                ? '00'
                : reserve.date.toDate().getMinutes();
            if (hour === reservedHour + ':' + reservedMinutes) {
              let index = vet.availableHours.indexOf(hour);
              vet.availableHours.splice(index, 1);
            }
          });
        });
        this.updateSelect();
      });
  }

  bock(vet): void {
    let hour = this.serviceHour.split(':');
    this.reserve.date.setHours(hour[0], hour[1]);
    this.reserve.typeOfService = this.serviceType;
    this.reserve.reserveUserName = vet.reserveUserName;
    this.reserve.vet = vet.name;
    this.reserve.vetId = vet.id;
    this.reserveService.createReserve(this.reserve);
  }

  setNewReserve() {
    this.reserve = {};
    this.reserve.status = 'Reservado';
    this.reserve.userId = this.loggedUser.id;
    this.reserve.userName = this.loggedUser.name;
  }

  initializeDatePicker() {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      disableWeekends: true,
      minDate: new Date(),
      onSelect: date => {
        this.reserve.date = date;
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

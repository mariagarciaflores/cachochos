import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'vet-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {
        disableWeekends: true,
        minDate: new Date(),
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
    });
  }
  fillForm(): void {
    this.router.navigate(['/reserve-confirmation']);
  }
}

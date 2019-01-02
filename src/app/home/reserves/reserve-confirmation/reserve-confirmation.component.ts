import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReserveService } from '../reserve.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vet-reserve-confirmation',
  templateUrl: './reserve-confirmation.component.html',
  styleUrls: ['./reserve-confirmation.component.scss']
})
export class ReserveConfirmationComponent implements OnInit {
  reserveId: string;
  reserve$: Observable<any>;

  constructor(private route: ActivatedRoute, private reserveService: ReserveService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reserveId = params.id;
      this.reserve$ = this.reserveService.getReserveById(this.reserveId);
      console.log(this.reserveId);
    });
  }

}

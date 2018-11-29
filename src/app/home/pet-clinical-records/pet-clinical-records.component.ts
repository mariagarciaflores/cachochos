import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'vet-pet-clinical-records',
  templateUrl: './pet-clinical-records.component.html',
  styleUrls: ['./pet-clinical-records.component.scss']
})
export class PetClinicalRecordsComponent implements OnInit {
  newClinicalRecord: any;
  clinicalRecords: Array<any>;

  constructor(public datepipe: DatePipe) {
    this.newClinicalRecord = {};
    this.clinicalRecords = [
      {
        creationDate: '22/11/2018',
        typeOfService: 'Vacunación',
        symptom: 'Ninguno',
        Observations:
          'Se le aplicó la vacuna contra la rabia, marca patito y el número de serie 889087',
        treatment: 'Ninguno'
      },
      {
        creationDate: '10/11/2018',
        typeOfService: 'Pronóstico de enfermedad',
        symptom: 'Fiebre, vómitos, falta de apetito, desnutrición',
        Observations:
          'Desde el día Lunes no tiene ganas de comer, no tiene vacunas al día, cuando se le obliga a comer algo el animal tiene ganas de vomitar',
        treatment: 'Internar a la mascota por 3 días, con un suero por día.'
      },
      {
        creationDate: '10/11/2018',
        typeOfService: 'Pronóstico de enfermedad',
        symptom: 'Fiebre, vómitos, falta de apetito, desnutrición',
        Observations:
          'Desde el día Lunes no tiene ganas de comer, no tiene vacunas al día, cuando se le obliga a comer algo el animal tiene ganas de vomitar',
        treatment: 'Internar a la mascota por 3 días, con un suero por día.'
      },
      {
        creationDate: '10/11/2018',
        typeOfService: 'Pronóstico de enfermedad',
        symptom: 'Fiebre, vómitos, falta de apetito, desnutrición',
        Observations:
          'Desde el día Lunes no tiene ganas de comer, no tiene vacunas al día, cuando se le obliga a comer algo el animal tiene ganas de vomitar',
        treatment: 'Internar a la mascota por 3 días, con un suero por día.'
      }
    ];
  }

  ngOnInit() {}

  addClinicalRecord(): void {
    let date = new Date();
    let formattedDate = this.datepipe.transform(date, 'dd/MM/yyyy');
    this.newClinicalRecord.creationDate = formattedDate;
    console.log(this.newClinicalRecord);
    this.clinicalRecords.push(this.newClinicalRecord);
    this.newClinicalRecord = {};
  }
}

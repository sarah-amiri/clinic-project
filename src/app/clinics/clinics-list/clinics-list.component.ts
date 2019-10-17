import { Component, OnInit } from '@angular/core';
import { ClinicService } from './../clinic.service';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.scss']
})
export class ClinicsListComponent implements OnInit {
    clinics: string[];

    constructor(private clinicService: ClinicService) { }

    ngOnInit() {
        this.clinicService.getClinicsName()
            .subscribe(clc => this.clinics = clc);
    }

}

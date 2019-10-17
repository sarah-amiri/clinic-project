import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClinicService } from './../clinic.service';
import { DoctorService } from './../../shared/services/doctor.service';
import { Clinic } from './../clinic.model'

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.scss']
})
export class ClinicDetailComponent implements OnInit {
    clinic: Clinic;
    doctors: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private clinicService: ClinicService,
        private doctorService: DoctorService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.doctors = [];
                let nm = params['name'];
                this.clinicService.getClinicByName(nm)
                    .subscribe((clc: Clinic) => {
                        this.clinic = clc;
                        for (let i = 0; i < clc.specialties.length; i++) {
                            
                            this.doctorService.getDoctorsBySpecialty(clc.specialties[i])
                                .subscribe((data: { id: number, fname: string, lname: string }[]) => {
                                    if (data.length) {
                                        for (let d = 0; d < data.length; d++) {
                                            this.doctors.push(data[d]);
                                        }
                                    }
                                })
                        }
                    });
            }
            );
  }

}

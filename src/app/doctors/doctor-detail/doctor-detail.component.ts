import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { DoctorService } from './../../shared/services/doctor.service';
import { Doctor } from '../../shared/models/doctor.model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {
    id: number;
    doctor: Doctor;

    constructor(private route: ActivatedRoute,
        private doctorService: DoctorService,
        private location: Location) { }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.id = params['id'];
                this.doctorService.getDoctorById(this.id)
                    .subscribe((doc: Doctor) => this.doctor = doc)
            });
    }
    back() {
        this.location.back();
    }

}

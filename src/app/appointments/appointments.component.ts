import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../shared/models/doctor.model';
import { DoctorService } from '../shared/services/doctor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
    doctor: Doctor;
    attendance: any;
    days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

    constructor(
        private doctorService: DoctorService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.queryParams['doctor'];
        this.doctorService.getDoctorById(id)
            .subscribe((doctor) => {
                this.doctor = doctor;
                this.attendance = doctor.attendance;
                console.log(this.attendance);
            });
  }

}

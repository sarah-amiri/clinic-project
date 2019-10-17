import { Component, OnInit } from '@angular/core';

import { DoctorService } from './../../shared/services/doctor.service';
import { Doctor } from './../../shared/models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
    days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    times = [
        { fa: 'صبح', value: 'morning' },
        { fa: 'عصر', value: 'afternoon'}
    ];
    doctors: Doctor[];
    specialties: string[] = [];
    searchText: string;
    s: string;
    d: string;
    t: string;

    constructor(private doctorService: DoctorService) { }

    ngOnInit() {
        this.loadDoctors();
    }

    public numToDay(nums: number[]) {
      let result = '';
      for(let n of nums) {
        result += this.days[n] + '، ';
      }
      let len = result.length;
      result = result.substring(0, len - 2);
      return result;
    }

    private loadDoctors() {
        this.doctorService.getDoctors()
            .subscribe(
            (data: Doctor[]) => {
                this.doctors = data;
                this.doctors.forEach((item) => {
                    if (this.specialties.indexOf(item.specialty) === -1) {
                        this.specialties.push(item.specialty);
                    }
                })
              }
            );
    }
    resetSearchBox() {
        this.searchText = null;
        this.s = null;
        this.t = null;
        this.d = null;
    }
}

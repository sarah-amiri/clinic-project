import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
    url = 'http://localhost:3000/doctors';

    constructor(private http: HttpClient) { }

    getDoctors() {
        return this.http.get<Doctor[]>(this.url);
    }
    getDoctorById(id: number) {
        return this.http.post<Doctor>(this.url + '/id', {id: id});
    }
    getDoctorsBySpecialty(special: string) {
        return this.http.post<{ id: number, fname: string, lname: string }[]>(this.url + '/specialty', { specialty: special });
    }
}

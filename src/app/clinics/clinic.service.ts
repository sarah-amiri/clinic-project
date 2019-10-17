import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinic } from './clinic.model';

@Injectable({
	providedIn: 'root'
})

export class ClinicService {
	url = 'http://localhost:3000/clinics';

	constructor(private http: HttpClient){}

	getClinicsName() {
		return this.http.get<string[]>(this.url);
    }
    getClinicByName(name: string) {
        return this.http.post<Clinic>(this.url + '/clinic', { name: name });
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicsListComponent } from './clinics/clinics-list/clinics-list.component';
import { ClinicDetailComponent } from './clinics/clinic-detail/clinic-detail.component';

import { FilterPipe } from './doctors/filter.pipe';;
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';;
import { AppointmentsComponent } from './appointments/appointments.component'

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorListComponent ,
    DoctorDetailComponent ,
    DashboardComponent,
    ClinicDetailComponent,
    ClinicsListComponent,
      ClinicsComponent,
      FilterPipe ,
      LoginComponent,
      RegisterComponent
,
      AuthenticationComponent ,
      AppointmentsComponent ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
       FormsModule, 
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

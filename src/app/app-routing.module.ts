import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicDetailComponent } from './clinics/clinic-detail/clinic-detail.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    {
        path: 'doctors', children: [
            { path: '', component: DoctorsComponent, pathMatch: 'full' },
            { path: ':id', component: DoctorDetailComponent }
        ]
    },
    {
        path: 'clinics', component: ClinicsComponent, children: [
            { path: ':name', component: ClinicDetailComponent }
        ]
    },
    {
        path: 'user', component: AuthenticationComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: 'appointments', component: AppointmentsComponent
    },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TokenService } from './token.service';

const URL = environment.baseurl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private token: TokenService
    ) { }

    register(user: User) {
        return this.http.post(URL + '/user/register', user)
            .pipe(
              tap(() => console.log('user checked')),
              catchError(this.handleError)
            );
    }
    login(id: number, password: string) {
        return this.http.post(URL + '/user/login', { id: id, password: password })
            .pipe(
              tap(() => console.log('user login')),
              catchError(this.handleError)
            );
    }
    isSignedIn() {
        let u = localStorage.getItem('access_token');
        if (u) {
            return true;
        }
        return false;
    }
    

    private handleError(error: HttpResponse<any> | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

    private getRequestOptions() {
        return new HttpHeaders({
            'Authorization': 'Bearer' + this.token.getToken()
        });
    }

}

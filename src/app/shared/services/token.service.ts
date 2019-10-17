import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    tokenChanged = new EventEmitter<boolean>();

    constructor() { }

    createToken(token: string) {
        localStorage.setItem('access_token', token);
        this.tokenChanged.emit(true);
    }

    removeToken() {
        localStorage.removeItem('access_token');
    }

    getToken() {
        return localStorage.getItem('access_token');
    }
}

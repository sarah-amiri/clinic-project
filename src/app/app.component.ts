import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { TokenService } from './shared/services/token.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    signedIn: boolean;

    constructor(
        private auth: AuthService,
        private token: TokenService,
        private router: Router
    ) { }

    ngOnInit() {
        this.signedIn = this.auth.isSignedIn();
        this.token.tokenChanged
            .subscribe(c => this.signedIn = c);
    }
    logout() {
        console.log('logout');
        this.signedIn = !this.signedIn;
        this.token.removeToken();
        this.router.navigate(['/']);
    }
}

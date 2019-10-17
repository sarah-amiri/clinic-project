import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from '../../shared/services/token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    success: boolean = false;
    fail: boolean = false;

    constructor(
        private auth: AuthService,
        private token: TokenService,
        private router: Router
    ) { }

  ngOnInit() {
  }

  signin(form: NgForm) {
      this.success = false;
      this.fail = false;
      this.auth.login(form.value.id, form.value.password)
          .subscribe((data: any) => {
              if (data.token) {
                  this.token.createToken(data.token);
                  form.reset();
                  this.success = true;
                  setTimeout(() => {
                      this.router.navigate(['/'])
                  }, 3000);
              } else {
                  this.fail = true;
                  form.reset();
              }
          });
  }
}

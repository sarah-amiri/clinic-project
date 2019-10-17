import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from '../../shared/services/token.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    register: FormGroup;
    genders = ['زن', 'مرد'];
    success: boolean = false;
    fail: boolean = false;

    constructor(
        private auth: AuthService,
        private router: Router,
        private token: TokenService
    ) { }

  ngOnInit() {
      this.register = new FormGroup({
          'fname': new FormControl('', [Validators.required, Validators.pattern("^[\u0600-\u06FF]+$")]),
          'lname': new FormControl('', [Validators.required, Validators.pattern("^[\u0600-\u06FF]+$")]),
          'id': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
          'gender': new FormControl('', Validators.required),
          'password': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
      });
  }
  signup() {
      this.success = false;
      this.fail = false;
      let user: User = new User(
          this.register.value.fname,
          this.register.value.lname,
          this.register.value.id,
          this.register.value.password,
          this.register.value.gender
      );
      this.auth.register(user)
          .subscribe(
          (data: any) => {
              if (data.token) {
                  this.token.createToken(data.token);
                  this.register.reset();
                  this.success = true;
                  setTimeout(() => {
                      this.router.navigate(['/'])
                  }, 3000);
                  
              } else {
                  this.register.reset();
                  this.fail = true;
              }
          })
          
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

export interface LoginRequestPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: Date;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;

  constructor(
     private fb: FormBuilder,
     private authService : AuthService
    ) {
    // use FormBuilder to create a form group
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login() {
    

    // this.authService.login(this.loginRequestPayload).subscribe(data => {
    //   console.log('Login successful');
    // });
  }

}

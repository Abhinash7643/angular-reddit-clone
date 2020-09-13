import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  registerSuccessMessage: string;
  isError: boolean;

  constructor(
     private fb: FormBuilder,
     private authService: AuthService,
     private activatedRoute: ActivatedRoute,
     private router: Router,
     private toastr: ToastrService
    ) {
    // use FormBuilder to create a form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }

  login(): void {
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(data => {
        if (data) {
          this.isError = false;
          this.router.navigateByUrl('/');
          this.toastr.success('Login Successful');
        } else {
          this.isError = true;
        }
      });
    }
  }

}

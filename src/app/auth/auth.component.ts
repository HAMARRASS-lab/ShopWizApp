import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',

})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: any = null;

  constructor(private AuthService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.router.navigateByUrl('/recipes');
    } else {
      this.AuthService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.error= "An error occurred!"
        this.isLoading = false;

      });
    }

    form.reset();
  }
}

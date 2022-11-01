import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'login';
  loginForm!: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log("is callled", this.loginForm.valid)
    if (this.loginForm.valid) {
      let currentAccount = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      console.log(currentAccount)
      this.router.navigate(['employeer'])
      // json - server.setItem('accounts', JSON.stringify(currentAccount))
    } else {

    }

  };
}

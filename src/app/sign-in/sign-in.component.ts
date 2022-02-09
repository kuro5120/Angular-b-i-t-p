import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('loginform')
  loginform!:NgForm;

  btndisabled = false;
  url = 'http://localhost:4200/sign-in'

  userInfo = {
    userName: '',
    password: '',
    rememberMe: false,
  };

  passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[\d]){1,}).{8,}$/;

  constructor( private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginform.valid){
      console.log('Mật khẩu không hợp lệ');
      return;
    }

    this.router.navigate(['/home'])

    console.log(this.loginform.value);
  }

  validate() {
    return true;
  }

}

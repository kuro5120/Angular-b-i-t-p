import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userInfo = {
    userName: '',
    password: '',
    rememberMe: false,
  };

  passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[\d]){1,}).{8,}$/;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

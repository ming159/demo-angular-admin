import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username: String = "";
  password: string = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = 'wang_po';
    this.password = "123456";
    this.passwordChange()
  }

  passwordChange(){
    let pass = document.getElementsByClassName('login_password');
    console.log(pass[0])
  }

  loginEvent(){
    this.router.navigate(['./home'])
  }
  regisEvent(){
    this.router.navigate(['./register'])
  }

}

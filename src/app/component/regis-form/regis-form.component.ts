import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ElMessageService } from 'element-angular'

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.scss']
})
export class RegisFormComponent implements OnInit {
  username: String = "";
  password: string = "";
  email: String = "";
  phone: String = "";
  constructor(
    private router: Router,
    private message: ElMessageService
  ) { }

  ngOnInit(): void {
    this.username = 'regis_test';
    this.password = "123456";
    this.email = "";
    this.phone = "";
  }

  regisExc(){
    this.router.navigate(['./login'])
  }

  regisCancel(){
    this.message['info']('注册已经取消')
    this.router.navigate(['./login']) 
  }

}

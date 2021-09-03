import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ElMessageService } from 'element-angular'
import { CustomMessage } from '../../utils/cutom.message'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cusmessage: CustomMessage = new CustomMessage()
  settings: any[] = [];
  headers: any[] = [];

  constructor(
    private router: Router,
    private message: ElMessageService,
  ) { }

  ngOnInit(): void {
    this.headers = [
      {menu: '人文地理'},
      {menu: '天气预报'},
      {menu: '时代楷模'},
      {menu: '新闻频道'}
    ]
    this.settings = [
        {
            value: 'logout',
            label: '退登',
            divided: true
        }, {
            value: 'user',
            label: '用户中心',
            divided: true
        }, {
            value: 'seting',
            label: '设置',
            divided: true
        }
    ]
  }

  dropEvent(item:any){
      console.log(item) 
      if(item.value==='logout'){
          this.loginStart()
      } else if(item.value==='user'){
        this.router.navigate(['/home/user'])
      } else {
        this.router.navigate(['/home/setting'])
      }
  }

  loginStart(){
      this.message['success']('开始跳转登录页面')
      this.router.navigate(['/login'])
  }

  itemHandle(item: any){
    this.cusmessage.show('info',item.menu+'正在建设中...')
  }
  homeHandle(){
    this.router.navigate(['/home'])
  }

}

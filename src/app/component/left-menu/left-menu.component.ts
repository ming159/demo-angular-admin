import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleMenu(event: any){
    console.log(event)
    if(event==2) {
      this.router.navigate(['/home/role-manage'])
    } else if(event==3) {
      this.router.navigate(['/home/admin-config'])
    } else {
      this.router.navigate(['/home/people-config'])
    }
  }

}

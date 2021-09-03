import { Component, OnInit, } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit {
    forms: any = {
        email: String,
        a: String,
        b: String,
        c: String,
        d: String,
        e: String,
        f: String,
        g: String,
        h: String,
        i: String,
    }
    labelPosition: string = 'left';
    validateForms: any;
   
    constructor(
      private router: Router
      ) {
    }
    
    ngOnInit(): void {
    
    }

}
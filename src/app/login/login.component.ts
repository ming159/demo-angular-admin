import { Component } from  '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    constructor(private router: Router){
        //
    }
    registryEvent(){
        this.router.navigate(['./register'])
    }
}
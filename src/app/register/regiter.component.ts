import { Component } from  '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'regiter-app',
    templateUrl: './regiter.component.html'
})

export class RegiterComponent {
    constructor(private router: Router){
        // 
    }
    backHome(){
        this.router.navigate(['./main'])
    }
}
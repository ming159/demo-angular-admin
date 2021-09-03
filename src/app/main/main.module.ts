import { NgModule } from '@angular/core'

import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.module'

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        MainRoutingModule
    ]
})

export class MainModule {}
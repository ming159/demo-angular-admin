import { NgModule } from '@angular/core'

import { UserComponent } from './user.component'
import { UserRoutingModule } from './user-routing.module'


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        UserRoutingModule
    ]
})

export class UserModule {}
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from  '@angular/core'
import { RegiterComponent } from './regiter.component'

const routes: Routes = [
    {
        path: 'register',
        component: RegiterComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RegistertRoutingModule {}
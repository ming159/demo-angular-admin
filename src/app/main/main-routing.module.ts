import { RouterModule, Routes } from '@angular/router'
import { NgModule } from  '@angular/core'
import { MainComponent } from './main.component'

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
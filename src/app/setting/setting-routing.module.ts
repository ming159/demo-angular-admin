import { RouterModule, Routes } from '@angular/router'
import { NgModule } from  '@angular/core'
import { SettingComponent } from './setting.component'

const routes: Routes = [
    {
        path: 'user',
        component: SettingComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SettingRoutingModule {}
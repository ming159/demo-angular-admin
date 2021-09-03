import { RouterModule, Routes } from '@angular/router'
import { NgModule } from  '@angular/core'
import { TestComponent } from './test.component'

const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class TestRoutingModule {}
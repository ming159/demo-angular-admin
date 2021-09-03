import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component'
import { RegiterComponent } from './register/regiter.component'
import { HomeComponent } from './home/home.component'

import { TestComponent } from './test/test.component'
import { MainComponent } from './main/main.component'
import { UserComponent } from './user/user.component'
import { SettingComponent } from './setting/setting.component'
import { PeopleComponent } from './permise/peopleConfig/people.component'
import { RoleComponent } from './role-manage/role.component'
import { AdminComponent } from './admin-config/admin.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegiterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'role-manage',
        component: RoleComponent
      },
      {
        path: 'admin-config',
        component: AdminComponent
      },
      {
        path: 'people-config',
        component: PeopleComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

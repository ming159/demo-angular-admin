import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { RegiterComponent } from './register/regiter.component'
import { UserComponent } from './user/user.component'
import { SettingComponent } from './setting/setting.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css';

import { NewsComponent } from './component/news/news.component';
import { SingsComponent } from './component/sings/sings.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisFormComponent } from './component/regis-form/regis-form.component';
import { MainTableComponent } from './component/main-table/main-table.component';
import { HeaderComponent } from './component/header/header.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { DialogMainEditComponent } from './component/dialog-main-edit/dialog-main-edit.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';

import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { InterceptorService } from './utils/interceptor'
export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
  let service = new InterceptorService(xhrBackend, requestOptions);
  return service;
}

import 'animate.css';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    MainComponent,
    RegiterComponent,
    NewsComponent,
    SingsComponent,
    LoginFormComponent,
    RegisFormComponent,
    MainTableComponent,
    UserComponent,
    SettingComponent,
    HeaderComponent,
    DialogComponent,
    DialogMainEditComponent,
    LeftMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ElModule.forRoot()
  ],
  providers: [
    InterceptorService,
    {
      provide: Http,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

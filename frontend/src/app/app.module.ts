import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';

import { NgSemanticModule }        from 'ng-semantic';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { LoginComponent }          from './components/login/login.component';
import { RegistrationComponent }   from './components/registration/registration.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSemanticModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

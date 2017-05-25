import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent }   from './components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

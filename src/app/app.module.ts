import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaveComponent } from './cave/cave.component';
import { BouteilleComponent } from './bouteille/bouteille.component';
import { InitComponent } from './init/init.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './bouteille/form/form.component';
import { AuthService } from './services/auth.service';
import { BouteillesService } from './services/bouteilles.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CaveComponent,
    BouteilleComponent,
    InitComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, BouteillesService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

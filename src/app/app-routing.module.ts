import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CaveComponent } from './cave/cave.component';
import { BouteilleComponent } from './bouteille/bouteille.component';
import { FormComponent } from './bouteille/form/form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'cave', canActivate: [AuthGuardService], component: CaveComponent },
  { path: 'cave/bouteille/:id', canActivate: [AuthGuardService], component: BouteilleComponent },
  { path: 'cave/bouteille', canActivate: [AuthGuardService], component: FormComponent },
  { path: '', redirectTo: 'cave', pathMatch: 'full' },
  { path: '**', redirectTo: 'cave' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

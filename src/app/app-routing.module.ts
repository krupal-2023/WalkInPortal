import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnAccountComponent } from './registration/create-an-account/create-an-account.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'create-an-account', component: CreateAnAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

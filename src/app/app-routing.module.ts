import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfessorsPageComponent } from './professors-page/professors-page.component';
import { SelectClassesComponent } from './select-classes/select-classes.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'index', component: ProfessorsPageComponent},
  { path: 'classes/:id', component: SelectClassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

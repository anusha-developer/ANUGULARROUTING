import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistractionComponent } from './admin-registraction/admin-registraction.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistractionComponent } from './user-registraction/user-registraction.component';

const routes: Routes = [
  //{path:'',component:UserLoginComponent},
  {path:'', redirectTo:'/admin-Registraction',pathMatch:'full'},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-Registraction',component:UserRegistractionComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-Registraction',component:AdminRegistractionComponent},
  {path:'user-home/:name',component:UserHomeComponent},
  {path:'**',component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistractionComponent } from './user-registraction/user-registraction.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistractionComponent } from './admin-registraction/admin-registraction.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegistractionComponent,
    AdminLoginComponent,
    AdminRegistractionComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

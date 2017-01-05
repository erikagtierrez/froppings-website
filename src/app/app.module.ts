import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { PointsComponent } from './points/points.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    FooterComponent,
    ContactPageComponent,
    SignUpPageComponent,
    LoginPageComponent,
    MainComponent,
    PointsComponent,
    ReportsComponent,
    AdminUsersComponent,
    SidebarComponent,
    ButtonNavComponent,
    ModifyUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

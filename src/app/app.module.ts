import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    FooterComponent,
    ContactPageComponent,
    SignUpPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

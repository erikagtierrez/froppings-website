import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";


const APP_ROUTES: Routes = [
	{ path: '', redirectTo:'/home', pathMatch:'full'},
	{ path: 'home', component: HomepageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'sign-up', component: SignUpPageComponent },
	{ path: 'contact', component: ContactPageComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
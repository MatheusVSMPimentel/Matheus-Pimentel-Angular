import { Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { AboutMeComponent } from "./institutonial/about-me/about-me.component";
import { ContactMeComponent } from "./institutonial/contact-me/contact-me.component";

export const RoutesConfig: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'contactme', component: ContactMeComponent}
];
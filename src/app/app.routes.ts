import { Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { AboutMeComponent } from "./institutonial/about-me/about-me.component";
import { ContactMeComponent } from "./institutonial/contact-me/contact-me.component";
import { CoursesCertificationsGalleryComponent } from "./institutonial/courses-certifications-gallery/courses-certifications-gallery.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";

export const RoutesConfig: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'contactme', component: ContactMeComponent},
    {path: 'gallery', component: CoursesCertificationsGalleryComponent},
    {path: 'productslist', component: ListProductsComponent}
    
];
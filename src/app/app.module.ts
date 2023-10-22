import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HomeComponent } from './navigation/home/home.component';
import { RouterModule } from '@angular/router';
import { RoutesConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { ContactMeComponent } from './institutonial/contact-me/contact-me.component';
import { AboutMeComponent } from './institutonial/about-me/about-me.component';
import { OurTeamComponent } from './institutonial/our-team/our-team.component';
import { ChallengesOpportunitiesComponent } from './institutonial/about-me/challenges-opportunities/challenges-opportunities.component';
import { AboutMeModalComponent } from './modals/about-me-modal/about-me-modal.component';
import { ProfessionalJourneyModalComponent } from './modals/professional-journey-modal/professional-journey-modal.component';
import { AcademicFormationModalComponent } from './modals/academic-formation-modal/academic-formation-modal.component';
import { CoursesCertificationsGalleryComponent } from './institutonial/courses-certifications-gallery/courses-certifications-gallery.component';
import { CoursesCertificationModalComponent } from './modals/institutonial/courses-certification-modal/courses-certification-modal.component';
import { provideAnimations} from "@angular/platform-browser/animations"
import { FormsModule } from '@angular/forms';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductsService } from './products/Service/products.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


registerLocaleData(localePt)
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContactMeComponent,
    AboutMeComponent,
    OurTeamComponent,
    ChallengesOpportunitiesComponent,
    AboutMeModalComponent,
    ProfessionalJourneyModalComponent,
    AcademicFormationModalComponent,
    CoursesCertificationsGalleryComponent,
    CoursesCertificationModalComponent,
    ListProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(RoutesConfig, {useHash: false})]
  ],
  providers: [ProductsService,{provide: APP_BASE_HREF, useValue: '/'}, provideAnimations(), HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContactMeComponent,
    AboutMeComponent,
    OurTeamComponent,
    ChallengesOpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(RoutesConfig, {useHash: false})]
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

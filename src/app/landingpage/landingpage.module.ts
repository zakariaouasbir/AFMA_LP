import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landingpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './subheader/subheader.component';
import { FirstSectionComponent } from './firstSection/firstSection.component';
import { SecondSectionComponent } from './secondSection/secondSection.component';
import { AngularTiltModule } from 'angular-tilt';
import { ThirdSectionComponent } from './thirdSection/thirdSection.component';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, AngularTiltModule],
  declarations: [
    HeaderComponent,
    LandingPageComponent,
    SubHeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FooterComponent,
  ],
})
export class LandingPageModule {}

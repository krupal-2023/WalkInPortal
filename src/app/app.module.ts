import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalkInListComponent } from './walk-in-list/walk-in-list.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { WalkInListItemComponent } from './walk-in-list/walk-in-list-item/walk-in-list-item.component';
import { CreateAnAccountComponent } from './registration/create-an-account/create-an-account.component';
import { PersonalInformationComponent } from './registration/create-an-account/personal-information/personal-information.component';
import { StepperComponent } from './registration/create-an-account/stepper/stepper.component';
import { QualificationComponent } from './registration/create-an-account/qualification/qualification.component';
import { ReviewAndProceedComponent } from './registration/create-an-account/review-and-proceed/review-and-proceed.component';
import { EducationalQualificationComponent } from './registration/create-an-account/qualification/educational-qualification/educational-qualification.component';
import { ProfessionalQualificationComponent } from './registration/create-an-account/qualification/professional-qualification/professional-qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    WalkInListComponent,
    HeaderComponent,
    RegistrationComponent,
    WalkInListItemComponent,
    CreateAnAccountComponent,
    PersonalInformationComponent,
    StepperComponent,
    QualificationComponent,
    ReviewAndProceedComponent,
    EducationalQualificationComponent,
    ProfessionalQualificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

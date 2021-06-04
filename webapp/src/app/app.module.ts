import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { UploadchallengeComponent } from './components/uploadchallenge/uploadchallenge.component';
import { SolutionComponent } from './solution/solution.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularEditorModule } from "@kolkov/angular-editor";
import { SolutionAnalysisComponent } from './components/solution-analysis/solution-analysis.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MatChipsModule } from "@angular/material/chips";
import { UserprofileComponent} from './components/userprofile/userprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    RegistrationComponent,
    SolutionComponent,
    UploadchallengeComponent,
    LoginComponent,
    DashboardComponent,
    FeedbackComponent,
    SolutionAnalysisComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularEditorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatInputModule,
    MatChipsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DashboardComponent, FeedbackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

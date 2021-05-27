import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AngularEditorModule } from "@kolkov/angular-editor";
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
<<<<<<< HEAD
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AngularEditorModule } from "@kolkov/angular-editor";
=======
import { SolutionAnalysisComponent } from './components/solution-analysis/solution-analysis.component';
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0


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
<<<<<<< HEAD
    FeedbackComponent
=======
    SolutionAnalysisComponent
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0
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
<<<<<<< HEAD
=======
    MatDatepickerModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatInputModule,
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

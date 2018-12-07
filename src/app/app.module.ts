import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NotfoundPageComponent } from './Pages/notfound-page/notfound-page.component';
import { PrivatePageComponent } from './Pages/private-page/private-page.component';
import { NavbarPageComponent } from './Pages/navbar-page/navbar-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventService } from './services/event/event.service';
import { FooterPageComponent } from './Pages/footer-page/footer-page.component';

// Angular Material
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material';
import { LandingComponent } from './Pages/landing/landing.component';
import { CalendarioComponent } from './Pages/calendar/calendario.component';
import { HeaderComponent } from './Pages/header/header.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { RegisterComponent } from './Pages/Admin/User/register/register.component';
import { RegisterFormComponent } from './Pages/Admin/User/register-form/register-form.component';
import { AvailabilityVerifierComponent } from './Pages/ScheduleMeeting/availability-verifier/availability-verifier.component';
import { UserFinderComponent } from './Pages/ScheduleMeeting/user-finder/user-finder.component';
import { ScheduleMeetingComponent } from './Pages/ScheduleMeeting/schedule-meeting/schedule-meeting.component';
import { UserAvailabilityComponent } from './Pages/ScheduleMeeting/user-availability/user-availability.component';
import { FoundedUserComponent } from './Pages/ScheduleMeeting/founded-user/founded-user.component';

//ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './Pages/Forms/Datepicker/datepicker/datepicker.component';
import { TimepickerComponent } from './Pages/Forms/Timepicker/timepicker/timepicker.component';
import { RestrictHoursComponent } from './Pages/RestrictHours/restrict-hours/restrict-hours.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotfoundPageComponent,
    PrivatePageComponent,
    NavbarPageComponent,
    LoginPageComponent,
    FooterPageComponent,
    LandingComponent,
    CalendarioComponent,
    HeaderComponent,
    DashboardComponent,
    RegisterComponent,
    RegisterFormComponent,
    AvailabilityVerifierComponent,
    UserFinderComponent,
    ScheduleMeetingComponent,
    UserAvailabilityComponent,
    FoundedUserComponent,
    DatepickerComponent,
    TimepickerComponent,
    RestrictHoursComponent

  ],
  imports: [
    MbscModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    FullCalendarModule,
    MaterialModule,
    NgbModule
  ],

  providers: [
    FlashMessagesService,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

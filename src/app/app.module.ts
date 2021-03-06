import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {CalendarListComponent} from "./calendar/calendar-list/calendar-list.component";
import {CalendarItemComponent} from "./calendar/calendar-list/calendar-item/calendar-item.component";
import {SpaceService} from "./space/space.service";
import {ConflictSerivice} from "./activity/activity-conflict-list/activity-conflict.service";
import {PersonService} from "./person/person.service";
import {ActivityTypeService} from "./activity/activity-type.service";
import {CalendarEditComponent} from "./calendar/calendar-edit/calendar-edit.component";
import {CalendarDetailComponent} from "./calendar/calendar-detail/calendar-detail.component";
import {LabelService} from "./activity/label.service";
import {ActivityNavComponent} from "./activity/activity-nav/activity-nav.component";
import {ActivityExportComponent} from "./activity/activity-export/activity-export.component";
import {ActivityListComponent} from "./activity/activity-list/activity-list.component";
import {ActivityItemComponent} from "./activity/activity-list/activity-item/activity-item.component";
import {ActivityDetailComponent} from "./activity/activity-list/activity-detail/activity-detail.component";
import {ActivityEditComponent} from "./activity/activity-list/activity-edit/activity-edit.component";
import {ActivityConflictListComponent} from "./activity/activity-conflict-list/activity-conflict-list.component";
import {ActivityConflictItemComponent} from "./activity/activity-conflict-list/activity-conflict-item/activity-conflict-item.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ActivityService} from "./activity/activity.service";
import {LoggingService} from "./shared/logging.service";
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonItemComponent} from "./person/person-list/person-item/person-item.component";
import {PersonEditComponent} from "./person/person-list/person-edit/person-edit.component";
import {PersonDetailComponent} from "./person/person-list/person-detail/person-detail.component";
import {ActivityAssignComponent} from "./activity/activity-list/activity-assign/activity-assign.component";
import {AssignService} from "./activity/assign-service";
import {CalendarService} from "./calendar/calendar.service";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ActivityNavComponent,
    ActivityExportComponent,
    ActivityListComponent,
    ActivityItemComponent,
    ActivityDetailComponent,
    ActivityEditComponent,
    ActivityConflictListComponent,
    ActivityConflictItemComponent,
    DropdownDirective,
    CalendarListComponent,
    CalendarItemComponent,
    CalendarEditComponent,
    CalendarDetailComponent,
    PersonListComponent,
    PersonItemComponent,
    PersonEditComponent,
    PersonDetailComponent,
    ActivityAssignComponent,
    SigninComponent,
    SignupComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AppRoutingModule

  ],
  providers: [
    ActivityService,
    PersonService,
    LoggingService,
    SpaceService,
    ConflictSerivice,
    CalendarService,
    ActivityTypeService,
    LabelService,
    AssignService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

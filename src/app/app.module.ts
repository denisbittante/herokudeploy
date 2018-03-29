import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatNativeDateModule
} from "@angular/material";
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
import {CalendarNavComponent} from "./calendar/calendar-nav/calendar-nav.component";
import {CalendarItemComponent} from "./calendar/calendar-list/calendar-item/calendar-item.component";
import {SpaceService} from "./space/space.service";
import {ConflictSerivice} from "./activity/activity-conflict-list/activity-conflict.service";
import {CalendarService} from "./calendar/calendar.service";
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

const appRoutes: Routes = [
  {path: '', redirectTo: '/activities', pathMatch: 'full'},
  {path: 'activities', component: ActivityListComponent},
  {path: 'activity/detail/:id', component: ActivityDetailComponent},
  {path: 'activity/edit/:id', component: ActivityEditComponent},
  {path: 'activity/new', component: ActivityEditComponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'person/edit/:id', component: PersonEditComponent},
  {path: 'person/new', component: PersonEditComponent},
  {path: 'calendar', component: CalendarListComponent},
  {path: 'calendar/detail/:id', component: CalendarDetailComponent},
  {path: 'calendar/edit/:id', component: CalendarEditComponent},
  {path: '**', redirectTo: '/activities', pathMatch: 'full'}
];

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
    CalendarNavComponent,
    CalendarItemComponent,
    CalendarEditComponent,
    CalendarDetailComponent,
    PersonListComponent,
    PersonItemComponent,
    PersonEditComponent,
    PersonDetailComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
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
    MatNativeDateModule
  ],
  providers: [
    ActivityService,
    PersonService,
    LoggingService,
    SpaceService,
    ConflictSerivice,
    CalendarService,
    ActivityTypeService,
    LabelService
  ],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

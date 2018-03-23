import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
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
import {Routes, RouterModule} from "@angular/router";
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
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatIconModule} from '@angular/material/icon';


const appRoutes: Routes = [
  {path: '', component: ActivityListComponent},
  {path: 'activities', component: ActivityListComponent},
  {path: 'activity/detail/:id', component: ActivityDetailComponent},
  {path: 'activity/edit', component: ActivityEditComponent},
  {path: 'activity/detail/:id/edit', component: ActivityEditComponent},
  {path: 'calendar', component: CalendarListComponent},
  {path: 'calendar/detail/:id', component: CalendarDetailComponent},
  {path: 'calendar/edit/:id', component: CalendarEditComponent},
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
    CalendarDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [
    ActivityService,
    LoggingService,
    SpaceService,
    ConflictSerivice,
    CalendarService,
    PersonService,
    ActivityTypeService,
    LabelService
  ],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

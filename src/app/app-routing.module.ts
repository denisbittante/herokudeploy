///<reference path="activity/activity-list/activity-edit/activity-edit.component.ts"/>
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {ActivityListComponent} from "./activity/activity-list/activity-list.component";
import {ActivityDetailComponent} from "./activity/activity-list/activity-detail/activity-detail.component";
import {ActivityEditComponent} from "./activity/activity-list/activity-edit/activity-edit.component";
import {AuthGuard} from "./auth/auth-guard.service";
import {PersonListComponent} from "./person/person-list/person-list.component";
import {PersonDetailComponent} from "./person/person-list/person-detail/person-detail.component";
import {PersonEditComponent} from "./person/person-list/person-edit/person-edit.component";
import {CalendarListComponent} from "./calendar/calendar-list/calendar-list.component";
import {CalendarDetailComponent} from "./calendar/calendar-detail/calendar-detail.component";
import {CalendarEditComponent} from "./calendar/calendar-edit/calendar-edit.component";
import {NgModule} from "@angular/core";
/**
 * Created by Denis Bittante on 03.06.2018.
 */


const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'activities', component: ActivityListComponent},
  {path: 'activity/detail/:id', component: ActivityDetailComponent},
  {path: 'activity/edit/:id', component: ActivityEditComponent, canActivate: [AuthGuard]},
  {path: 'activity/new', component: ActivityEditComponent, canActivate: [AuthGuard]},
  {path: 'persons', component: PersonListComponent},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'person/edit/:id', component: PersonEditComponent, canActivate: [AuthGuard]},
  {path: 'person/new', component: PersonEditComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarListComponent},
  {path: 'calendar/detail/:id', component: CalendarDetailComponent},
  {path: 'calendar/edit/:id', component: CalendarEditComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/activities', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/activities', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

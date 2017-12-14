import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ActivityHeaderComponent }       from './activity/activity-header/activity-header.component';
import { ActivityNavComponent }          from './activity/activity-nav/activity-nav.component';
import { ActivityExportComponent }       from './activity/activity-export/activity-export.component';
import { ActivityListComponent }         from './activity/activity-list/activity-list.component';
import { ActivityItemComponent }         from './activity/activity-list/activity-item/activity-item.component';
import { ActivityDetailComponent }       from './activity/activity-list/activity-detail/activity-detail.component';
import { ActivityEditComponent }         from './activity/activity-list/activity-edit/activity-edit.component';
import { ActivityConflictListComponent } from './activity/activity-conflict-list/activity-conflict-list.component';
import { ActivityConflictItemComponent } from './activity/activity-conflict-list/activity-conflict-item/activity-conflict-item.component';
import { DropdownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    ActivityHeaderComponent,
    ActivityNavComponent,
    ActivityExportComponent,
    ActivityListComponent,
    ActivityItemComponent,
    ActivityDetailComponent,
    ActivityEditComponent,
    ActivityConflictListComponent,
    ActivityConflictItemComponent,
    DropdownDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

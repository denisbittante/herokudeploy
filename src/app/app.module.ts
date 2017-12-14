import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ActivityHeaderComponent }      from './activity/activity-header/activity-header.component';
import { ActivtyNavComponent }          from './activity/activty-nav/activty-nav.component';
import { ActivtyExportComponent }       from './activity/activty-export/activty-export.component';
import { ActivtyListComponent }         from './activity/activty-list/activty-list.component';
import { ActivityItemComponent }        from './activity/activty-list/activity-item/activity-item.component';
import { ActivityDetailComponent }      from './activity/activty-list/activity-detail/activity-detail.component';
import { ActivityEditComponent }        from './activity/activty-list/activity-edit/activity-edit.component';
import { ActivtyConflictListComponent } from './activity/activty-conflict-list/activty-conflict-list.component';
import { ActivityConflictItemComponent } from './activity/activty-conflict-list/activity-conflict-item/activity-conflict-item.component';
import { DropdownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    ActivityHeaderComponent,
    ActivtyNavComponent,
    ActivtyExportComponent,
    ActivtyListComponent,
    ActivityItemComponent,
    ActivityDetailComponent,
    ActivityEditComponent,
    ActivtyConflictListComponent,
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

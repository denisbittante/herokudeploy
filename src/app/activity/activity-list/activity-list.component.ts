import {Component, OnInit} from '@angular/core';
import {Activity} from "../activity-model";

import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: 'activity-list.component.html',
  styleUrls: ['activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {

  searchInput: string;

  activitylist: Activity[] = [];

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activitylist = this.activityService.activitylist;
    console.log(this.activitylist);
  }

}

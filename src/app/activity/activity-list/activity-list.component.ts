import {Component, OnInit} from "@angular/core";
import {Activity} from "../activity-model";
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: 'activity-list.component.html',
  styleUrls: ['activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  searchInput: string;
  activitylist: Array<Activity>;

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityService.list(null).subscribe(data => this.activitylist = data);
  }

  refresh() {
    this.activityService.list(this.searchInput).subscribe(data => this.activitylist = data);
  }

}

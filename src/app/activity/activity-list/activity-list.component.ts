import {Component, OnInit} from "@angular/core";
import {ActivityService} from "../activity.service";
import {ActivityPageable} from "../activity-pageable";

@Component({
  selector: 'app-activity-list',
  templateUrl: 'activity-list.component.html',
  styleUrls: ['activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  public searchInput: string;
  public activities: ActivityPageable;
  public length: number = 100;
  public pageSize = 10;
  public pageSizeOptions = [5, 10, 25, 100];
  private pageIndex: number = 0;

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.refresh();
  }

  onReceivingData(data: ActivityPageable) {
    this.activities = data;
    this.length = this.activities.totalElements;
  }

  refresh() {
    this.activityService.list(this.searchInput, this.pageIndex, this.pageSize).subscribe(data => this.onReceivingData(data));
  }

  onPaginateChange(event) {
    this.pageIndex = event.pageIndex;
    this.refresh();
  }

}

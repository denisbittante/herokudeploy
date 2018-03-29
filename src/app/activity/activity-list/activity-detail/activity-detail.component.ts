import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "../../activity.service";
import {Activity} from "../../activity-model";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  public item: Activity;
  private id;

  constructor(private activityService: ActivityService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
    this.activityService.find(this.id).subscribe(data => this.item = data);
  }

  ngOnInit() {
  }

  public deleteActivty() {
    this.activityService.delete(this.item.activityid).subscribe(data => this.route.navigate(['activities']));
  }

}

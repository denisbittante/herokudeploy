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
      console.log(params);
      if (params['id']) {
        this.id = params['id'];
        console.log(this.id);
      }
    });
    this.activityService.find(this.id).subscribe(data => this.item = data);
  }

  ngOnInit() {
    console.log(this.item);

  }


}

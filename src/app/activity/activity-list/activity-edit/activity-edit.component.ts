import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../../activity.service";
import {Activity} from "../../activity-model";

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  activtiy: Activity;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private activitysrv: ActivityService) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.activtiy = this.activitysrv.getActivity(this.id);

  }

  cancel() {
    this.router.navigate(['activities']);
  }

}

import {Component, OnInit} from '@angular/core';
import {Activity} from "../activity-model";

@Component({
  selector: 'app-activty-list',
  templateUrl: './activty-list.component.html',
  styleUrls: ['./activty-list.component.css']
})
export class ActivtyListComponent implements OnInit {

  public activitylist: Activity[];

  constructor() {


  }

  ngOnInit() {
    activty:Activity = new Activity();
    this.activitylist.push(activity);

  }

}

import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Activity} from "../../activity-model";
import {Person} from "../../../person/person-model";
import {ActivityService} from "../../activity.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  @Input() item: Activity;
  @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  public personInCharge: Person;
  public helper: Person[] = [];

  constructor(private activityService: ActivityService, private router: Router) {
  }


  ngOnInit() {

  }



}

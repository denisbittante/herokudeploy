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
  @Input() itembefore: Activity;
  @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  public personInCharge: Person;
  public helper: Person[] = [];

  constructor(private activityService: ActivityService, private router: Router) {
  }


  ngOnInit() {

  }


  public isSameDay(): boolean {

    var itemfrom = new Date(this.item.actvityfrom);
    var itembeforefrom = new Date(this.itembefore.actvityfrom);

    if (this.itembefore) {
      if (itemfrom.getDate() === itembeforefrom.getDate()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public isSameMonth(): boolean {
    var itemfrom = new Date(this.item.actvityfrom);
    var itembeforefrom = new Date(this.itembefore.actvityfrom);

    if (this.itembefore) {
      if (
        (itemfrom.getMonth() === itembeforefrom.getMonth())
      && (itemfrom.getFullYear() === itembeforefrom.getFullYear())
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


}

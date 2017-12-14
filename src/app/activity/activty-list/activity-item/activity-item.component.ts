import {Component, OnInit, Input} from '@angular/core';
import {Activity} from "../../activity-model";

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  @Input() item: Activity;

  constructor() {
  }

  ngOnInit() {
  }

}

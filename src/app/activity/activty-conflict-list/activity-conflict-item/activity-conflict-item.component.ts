import {Component, OnInit, Input} from '@angular/core';
import {Conflict} from "../activity-conflict-model";

@Component({
  selector: 'app-activity-conflict-item',
  templateUrl: './activity-conflict-item.component.html',
  styleUrls: ['./activity-conflict-item.component.css']
})
export class ActivityConflictItemComponent implements OnInit {

  @Input() conflict: Conflict;

  constructor() {
  }

  ngOnInit() {
  }

  ignoreExcpetion() {
    this.conflict.setIgnored();

  }


}

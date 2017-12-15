import {Component, OnInit, Input} from '@angular/core';
import {ConflictModel} from "./activity-conflict-model";

@Component({
  selector: 'app-activity-conflict-list',
  templateUrl: './activity-conflict-list.component.html',
  styleUrls: ['./activity-conflict-list.component.css']
})
export class ActivityConflictListComponent implements OnInit {

  @Input() conflicts: ConflictModel[];

  constructor() {
  }

  ngOnInit() {
  }

}

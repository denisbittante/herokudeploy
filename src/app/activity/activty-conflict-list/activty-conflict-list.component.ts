import {Component, OnInit, Input} from '@angular/core';
import {Conflict} from "./activity-conflict-model";

@Component({
  selector: 'app-activty-conflict-list',
  templateUrl: './activty-conflict-list.component.html',
  styleUrls: ['./activty-conflict-list.component.css']
})
export class ActivtyConflictListComponent implements OnInit {

  @Input() conflicts: Conflict[];

  constructor() {
  }

  ngOnInit() {
  }

}

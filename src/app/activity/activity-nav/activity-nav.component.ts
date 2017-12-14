import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-activity-nav',
  templateUrl: 'activity-nav.component.html',
  styleUrls: ['activity-nav.component.css']
})
export class ActivityNavComponent implements OnInit {

  @Output() crActivity:EventEmitter<{name:string}> = new EventEmitter <{name: string}>();

  constructor() {
  }

  ngOnInit() {
  }

  onCreateActivity() {
    this.crActivity.emit({name:'Hallo'});
  }

}

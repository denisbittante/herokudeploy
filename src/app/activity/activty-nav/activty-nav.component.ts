import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-activty-nav',
  templateUrl: './activty-nav.component.html',
  styleUrls: ['./activty-nav.component.css']
})
export class ActivtyNavComponent implements OnInit {

  @Output() crActivity:EventEmitter<{name:string}> = new EventEmitter <{name: string}>();

  constructor() {
  }

  ngOnInit() {
  }

  onCreateActivity() {
    this.crActivity.emit({name:'Hallo'});
  }

}

import {Component, OnInit} from '@angular/core';
import {CalendarEntryModel} from "../calendar-model";

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  calendarList: CalendarEntryModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}

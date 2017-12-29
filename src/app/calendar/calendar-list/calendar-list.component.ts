import {Component, OnInit} from '@angular/core';
import {CalendarEntryModel} from "../calendar-model";

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  public calendarList: CalendarEntryModel[] = [
    new CalendarEntryModel(
      'Title For Example', 'CalendarInfo', [0, 1], 1, 1, new Date(), new Date(), false, 1, new Date(), new Date()
    ),
    new CalendarEntryModel(
      'Title For Example', 'CalendarInfo', [0, 1], 1, 1, new Date(), new Date(), false, 1, new Date(), new Date()
    ),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

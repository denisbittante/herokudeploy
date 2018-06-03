import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Calendar} from "../../calendar-model";
import {CalendarService} from "../../calendar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {

  @Input() item: Calendar;
  @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private calendarService: CalendarService, private router: Router) {
  }

  ngOnInit() {

  }

}

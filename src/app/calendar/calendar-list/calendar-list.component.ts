import {Component, OnInit} from "@angular/core";
import {CalendarService} from "../calendar.service";
import {CalendarPageable} from "../calendar-pageable";
import {Calendar} from "../calendar-model";

@Component({
  selector: 'app-calendar-list',
  templateUrl: 'calendar-list.component.html',
  styleUrls: ['calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  public searchInput: string;
  public calendars: CalendarPageable;
  public length: number = 100;
  public pageSize = 10;
  public pageSizeOptions = [5, 10, 25, 100];
  private pageIndex: number = 0;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.refresh();
  }

  onReceivingData(data: CalendarPageable) {
    this.calendars = data;
    this.length = this.calendars.totalElements;
  }

  refresh() {
    this.calendarService.list(this.searchInput, this.pageIndex, this.pageSize).subscribe(data => this.onReceivingData(data));
  }

  onPaginateChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.refresh();
  }



}

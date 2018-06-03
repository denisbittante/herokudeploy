import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CalendarService} from "../calendar.service";
import {Calendar} from "../calendar-model";

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {

  public item: Calendar;
  private id;

  ngOnInit() {
  }

  constructor(private calendarService: CalendarService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
    this.calendarService.find(this.id).subscribe(data => this.item = data);
  }


  public deleteCalendar() {
    this.calendarService.delete(this.item.calendarid).subscribe(data => this.router.navigate(['calendar']));
  }

}


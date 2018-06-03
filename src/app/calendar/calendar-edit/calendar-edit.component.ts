import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Calendar} from "../calendar-model";
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarService} from "../calendar.service";

@Component({
  selector: 'app-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.css']
})
export class CalendarEditComponent implements OnInit {

  frmGroup: FormGroup;
  editing: boolean;
  id: number = null;
  calendar: Calendar;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private calendarsrv: CalendarService) {

    this.frmGroup = new FormGroup({
      'calendarid': new FormControl(null),
      'personid': new FormControl(null),
      'created': new FormControl(null),
      'mutated': new FormControl(null),
      'calfrom': new FormControl(null),
      'calto': new FormControl(null),
      'caltype': new FormControl(null),
      'description': new FormControl(null),
      'allDay': new FormControl(null),

    });

  }

  // ACTIONS

  public update() {
    this.saveFormToModel();
    this.calendarsrv.update(this.calendar).subscribe(data => this.router.navigate(['calendars']));
    this.routeToMainpage();

  }

  public deleteActivty() {
    this.calendarsrv.delete(this.calendar.calendarid).subscribe(data => this.router.navigate(['calendars']));
  }

  public cancel() {
    this.routeToMainpage();
  }

  public create() {
    this.saveFormToModel();
    this.calendarsrv.create(this.calendar).subscribe(data => this.calendar = data);
    this.routeToMainpage();
  }

  routeToMainpage() {
    this.router.navigate(['calendars']);
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.editing = true;
      this.calendarsrv.find(this.id).subscribe(data => this.modelToForm(data));

    } else {
      this.editing = false;
    }

  }

  saveFormToModel() {

    var calendarid = this.frmGroup.get('calendarid').value;
    var personid = this.frmGroup.get('personid').value;
    var created = this.frmGroup.get('created').value;
    var mutated = this.frmGroup.get('mutated').value;
    var calfrom = this.frmGroup.get('calfrom').value;
    var calto = this.frmGroup.get('calto').value;
    var caltype = this.frmGroup.get('caltype').value;
    var description = this.frmGroup.get('description').value;
    var allDay = this.frmGroup.get('allDay').value;

    this.calendar = new Calendar(
      this.id,
      personid,
      created,
      mutated,
      calfrom,
      calto,
      caltype,
      description,
      allDay,
    );

  }


  modelToForm(data: Calendar) {

    this.calendar = data;
    this.frmGroup.get('calendarid').setValue(data.calendarid);
    this.frmGroup.get('personid').setValue(data.personid);
    this.frmGroup.get('created').setValue(data.created);
    this.frmGroup.get('mutated').setValue(data.mutated);
    this.frmGroup.get('calfrom').setValue(data.calfrom);
    this.frmGroup.get('calto').setValue(data.calto);
    this.frmGroup.get('caltype').setValue(data.caltype);
    this.frmGroup.get('description').setValue(data.description);
    this.frmGroup.get('allDay').setValue(data.allDay);


  }

}

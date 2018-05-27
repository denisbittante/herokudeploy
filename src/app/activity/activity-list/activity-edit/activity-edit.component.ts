import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../../activity.service";
import {ActivityStatus} from "../../activity-status-model";
import {Activity} from "../../activity-model";
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../../../person/person.service";
import {ActivityTypeService} from "../../activity-type.service";
import {LabelService} from "../../label.service";
import {SpaceModel} from "../../../space/space-model";
import {AssignService} from "../../assign-service";
import {Assign} from "../../assign-model";

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  activityForm: FormGroup;
  editing: boolean;
  id: number = null;
  activity: Activity;
  _allDay: boolean = false;

  public select_spaces: Array <SpaceModel>;
  public select_status: Array<ActivityStatus>;
  public assign_array: Array<Assign> = new Array();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private activitysrv: ActivityService,
              private assignService: AssignService,
              private personsrv: PersonService,
              private activitytypesrv: ActivityTypeService,
              private labelsrv: LabelService) {

    this.activityForm = new FormGroup({
      'title': new FormControl(null),
      'fromDate': new FormControl(null),
      'fromTime': new FormControl(null),
      'toDate': new FormControl(null),
      'toTime': new FormControl(null),
      'desc': new FormControl(null),
      'place': new FormControl(null),
      'activitytype': new FormControl(null),
      'space': new FormControl(),
      'parent': new FormControl(null),
      'status': new FormControl(null),
      'allDay': new FormControl(null)
    });

  }

  // ACTIONS

  public update() {
    this.saveFormToModel();
    this.activitysrv.update(this.activity).subscribe(data => this.router.navigate(['activities']));
    this.routeToMainpage();

  }

  public deleteActivty() {
    this.activitysrv.delete(this.activity.activityid).subscribe(data => this.router.navigate(['activities']));
  }

  public cancel() {
    this.routeToMainpage();
  }

  public create() {
    this.saveFormToModel();
    this.activitysrv.create(this.activity).subscribe(data => this.activity = data);
    this.routeToMainpage();
  }

  public addAssign() {
    this.assign_array.push(new Assign(null, this.id, null, null, null, null));
 }


  routeToMainpage() {
    this.router.navigate(['activities']);
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.editing = true;
      this.activitysrv.find(this.id).subscribe(data => this.modelToForm(data));

    } else {
      this.editing = false;
    }

    this.select_spaces = [
      new SpaceModel("Space 1", "Desc Space1", 1),
      new SpaceModel("Space 2", "Desc Space2", 2),
      new SpaceModel("Space 3", "Desc Space3", 3)
    ];
    this.select_status = [
      new ActivityStatus(1, "Offen"),
      new ActivityStatus(2, "in Arbeit"),
      new ActivityStatus(3, "Erledigt"),
      new ActivityStatus(4, "Veröffentlicht"),
      new ActivityStatus(5, "Archiviert"),
      new ActivityStatus(6, "Storniert")
    ];

    this.refresh();

  }

  saveFormToModel() {
    var title = this.activityForm.get('title').value;
    var fromDate = this.activityForm.get('fromDate').value;
    var fromTime = this.activityForm.get('fromTime').value;
    var toDate = this.activityForm.get('toDate').value;
    var toTime = this.activityForm.get('toTime').value;
    var desc = this.activityForm.get('desc').value;
    var place = this.activityForm.get('place').value;
    var activitytype = this.activityForm.get('activitytype').value;
    var space = this.activityForm.get('space').value;
    var status = this.activityForm.get('status').value;
    var parent = this.activityForm.get('parent').value;
    var allDay = this.activityForm.get('allDay').value;
    toDate = this.formToNumber(toDate, toTime);
    fromDate = this.formToNumber(fromDate, fromTime);

    var saveactivity = new Activity(
      this.id,
      title,
      desc,
      fromDate,
      toDate,
      allDay,
      place,
      activitytype,
      space,
      status,
      parent,
      new Date().getTime(),
      this.editing == false ? new Date().getTime() : this.activity.created
    );
    this.activity = saveactivity;

  }

  private formToNumber(date: any, time: any) {
    if (date != null) {

      date = new Date(date).getTime();

      if (time != null) {
        if (!this._allDay) {
          var array = time.split(':');
          date += array[0] * 60 * 60 * 1000;
          date += array[1] * 60 * 1000;
        }
      }
    }

    return date;
  }


  refresh() {
    this.assignService.list().subscribe(data => this.onReceivingData(data));
  }

  onReceivingData(data: Array<Assign>) {
    this.assign_array = data;
  }

  toggleValue() {
    if (this._allDay) {

      this._allDay = false;
    } else {

      this._allDay = true;
    }
    console.log("this.allDay =" + this._allDay);
  }


  modelToForm(data: Activity) {

    this.activity = data;

    this.activityForm.get('title').setValue(data.summary);
    this.activityForm.get('desc').setValue(data.description);
    this.activityForm.get('place').setValue(data.place);
    this.activityForm.get('space').setValue(data.space);
    this.activityForm.get('activitytype').setValue(data.activitytype);
    this.activityForm.get('status').setValue(data.status);
    this.activityForm.get('parent').setValue(data.parent);
    this.activityForm.get('allDay').setValue(data.isallday);
    this._allDay = data.isallday;
    this.activityForm.get('toDate').setValue(Activity.toDate(data.activityto));
    this.activityForm.get('toTime').setValue(Activity.toTime(data.activityto));
    this.activityForm.get('fromDate').setValue(Activity.toDate(data.actvityfrom));
    this.activityForm.get('fromTime').setValue(Activity.toTime(data.actvityfrom));


  }

}

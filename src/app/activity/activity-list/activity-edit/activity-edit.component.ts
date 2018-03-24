import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityService} from "../../activity.service";
import {Activity} from "../../activity-model";
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../../../person/person.service";
import {ActivityTypeService} from "../../activity-type.service";
import {LabelService} from "../../label.service";

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private activitysrv: ActivityService,
              private personsrv: PersonService,
              private activitytypesrv: ActivityTypeService,
              private labelsrv: LabelService) {

    this.activityForm = new FormGroup({
      'title': new FormControl(null),
      'fromDate': new FormControl(null),
      'fromTime': new FormControl(null),
      'toDate': new FormControl(null),
      'toTime': new FormControl(null),
      'allDay': new FormControl('checked'),
      'desc': new FormControl(null),
      'place': new FormControl(null),
      'activitytype': new FormControl(null),
      'space': new FormControl(null),
      'status': new FormControl(null),
      'linked': new FormControl(null),
      'sf_incharge': new FormControl(false),
      'sf_helper': new FormControl(false),
      'sf_space': new FormControl(false),
      'sf_linked': new FormControl(false),
      'sf_labels': new FormControl(false)
    });

  }


  // ACTIONS

  public  update() {
    this.saveFormToModel();
    this.activitysrv.update(this.activity).subscribe(data => this.router.navigate(['activities']));
  }

  public deleteActivty() {
    this.activitysrv.delete(this.activity.activityid).subscribe(data => this.router.navigate(['activities']));
  }

  public cancel() {
    this.router.navigate(['activities']);
  }

  onSubmit() {
    this.saveFormToModel();
    this.activitysrv.create(this.activity).subscribe(data => this.activity = data);
    //  this.activityForm.reset();
  }


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.editing = true;
      this.activitysrv.find(this.id).subscribe(data => this.modelToForm(data));

    } else {
      this.editing = false;
    }
  }

  saveFormToModel() {
    var title = this.activityForm.get('title').value;
    var fromDate = this.activityForm.get('fromDate').value;
    var fromTime = this.activityForm.get('fromTime').value;
    var toDate = this.activityForm.get('toDate').value;
    var toTime = this.activityForm.get('toTime').value;
    var allDay = this.activityForm.get('allDay').value;
    var desc = this.activityForm.get('desc').value;
    var place = this.activityForm.get('place').value;
    var activitytype = this.activityForm.get('activitytype').value;
    var space = this.activityForm.get('space').value;
    var status = this.activityForm.get('status').value;
    var parent = this.activityForm.get('linked').value;

    if (allDay == "checked") {
      allDay = true;
    }

    var saveactivity = new Activity(
      this.id,
      title,
      desc,
      null,
      null,
      // TODO:   new Date(fromDate + " " + fromTime),
      // TODO:  new Date(toDate + " " + toTime),
      allDay,
      place,
      activitytype,
      1,
      1,
      null,
      new Date().getTime(),
      new Date().getTime()
    );
    this.activity = saveactivity;

  }

  modelToForm(data: Activity) {
    this.activity = data;

    this.activityForm.get('title').setValue(data.summary);
    this.activityForm.get('desc').setValue(data.description);
    this.activityForm.get('place').setValue(data.place);
    this.activityForm.get('space').setValue(data.space);


  }


}

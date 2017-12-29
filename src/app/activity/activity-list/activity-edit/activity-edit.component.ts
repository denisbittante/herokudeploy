import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ActivityService} from "../../activity.service";
import {Activity} from "../../activity-model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../person/person.service";
import {Person} from "../../../person/person-model";
import {ActivityTypeService} from "../../activity-type.service";
import {LabelService} from "../../label.service";

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  activityForm: FormGroup;
  persons: Person[] = [];
  editing: boolean;
  id: number;
  activity: Activity;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private activitysrv: ActivityService,
              private personsrv: PersonService,
              private activitytypesrv: ActivityTypeService,
              private labelsrv: LabelService) {

    this.activityForm = new FormGroup({
      'title': new FormControl('Beispiel22', Validators.required),
      'fromDate': new FormControl(null),
      'fromTime': new FormControl(null),
      'toDate': new FormControl(null),
      'toTime': new FormControl(null),
      'allDay': new FormControl('checked'),
      'desc': new FormControl(null),
      'place': new FormControl(null),
      'incharge': new FormControl(null),
      'helpers': this.buildHelper(personsrv),
      'activitytype': new FormControl(null),
      'space': new FormControl(null),
      'status': new FormControl(null),
      'linked': new FormControl(null),
      'labels': this.buildLabels(labelsrv),
      'sf_incharge': new FormControl(false),
      'sf_helper': new FormControl(false),
      'sf_space': new FormControl(false),
      'sf_linked': new FormControl(false),
      'sf_labels': new FormControl(false)
    });

  }


  buildLabels(labelsrv: LabelService) {
    const arr = labelsrv.labels.map(label => {
      return new FormControl(label.selected);
    });
    return new FormArray(arr);
  }

  buildHelper(personsrv: PersonService) {

    const arr = personsrv.persons.map(person => {
      return new FormControl(person.callname);
    })
    return new FormArray(arr);

  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.persons = this.personsrv.persons;


    if (this.id > 0) {
      this.editing = true;
      this.activity = this.activitysrv.getActivity(this.id);

    } else {
      this.editing = false;

    }

    this.route.params
      .subscribe(
        (params: Params) => {
          this.activity = this.activitysrv.getActivity(params['id']);
        }
      )
  }

  cancel() {
    this.router.navigate(['activities']);
  }

  onSubmit() {
    console.log(this.activityForm);

    var title = this.activityForm.get('title').value;
    var fromDate = this.activityForm.get('fromDate').value;
    var fromTime = this.activityForm.get('fromTime').value;
    var toDate = this.activityForm.get('toDate').value;
    var toTime = this.activityForm.get('toTime').value;
    var allDay = this.activityForm.get('allDay').value;
    var desc = this.activityForm.get('desc').value;
    var place = this.activityForm.get('place').value;
    var incharge = this.activityForm.get('incharge').value;
    var helpers = this.activityForm.get('helpers').value;
    var activitytype = this.activityForm.get('activitytype').value;
    var space = this.activityForm.get('space').value;
    var status = this.activityForm.get('status').value;
    var linked = this.activityForm.get('linked').value;
    var labels = this.activityForm.get('labels').value;


    var labels = this.labelsrv.labels.map((selected, i) => {
      return {
        id: this.labelsrv.labels[i].id,
        selected
      }
    });

    this.activitysrv.addActivity(new Activity(
      -1,
      title,
      desc,
      new Date(fromDate + " " + fromTime),
      new Date(toDate + " " + toTime),
      allDay,
      place,
      incharge,
      helpers,
      activitytype,
      space,
      status,
      linked,
      [],
      labels,
      null,
      new Date(),
      new Date(),
      1
    ));


    //  this.activityForm.reset();
  }


  deleteLabel(index: number) {
    console.log("To delete Index : " + index);
    (<FormArray>this.activityForm.get('labels')).removeAt(index);
  }

  deletePerson(index: number) {
    console.log("To delete Index : " + index);
    (<FormArray>this.activityForm.get('helpers')).removeAt(index);
  }


  toggleSearchField(field: string) {
    console.log(field);

    let show = this.activityForm.get('sf_' + field).value;

    console.log(show);
    this.activityForm.get('sf_' + field).setValue(!show);

  }


}

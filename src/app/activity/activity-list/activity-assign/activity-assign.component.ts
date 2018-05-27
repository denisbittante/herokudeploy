import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Person} from "../../../person/person-model";
import {PersonService} from "../../../person/person.service";
import {FormControl} from "@angular/forms";
import {AssignService} from "../../assign-service";
import {Router, ActivatedRoute} from "@angular/router";
import {Assign} from "../../assign-model";
import {MatSelectChange} from "@angular/material";

@Component({
  selector: 'app-activity-assign',
  templateUrl: './activity-assign.component.html',
  styleUrls: ['./activity-assign.component.css']
})
export class ActivityAssignComponent implements OnInit {


  @Input() item: Assign;
  public personlist: Array<Person>;
  public assignInfoShow: boolean = true;
  public personControl: FormControl = new FormControl();
  public roleControl: FormControl = new FormControl();
  @Output() deleted: EventEmitter<Assign> = new EventEmitter<Assign>();

  constructor(private assignService: AssignService,
              private router: Router,
              private route: ActivatedRoute,
              private personService: PersonService) {
    this.personService.list().subscribe(data => this.personlist = data);
  }

// TODO: JWP-151
  public assignoptions = [
    {
      status: 'available',
      person: [
        {id: 2, viewValue: 'Denis Bittante', availableInfo: '02.04.2018'},
        {id: 3, viewValue: 'Michael Helfenberger', availableInfo: '02.04.2018'},
        {id: 4, viewValue: 'Walter Iten', availableInfo: '02.04.2018'},
      ]
    },
    {
      status: 'busy',
      person: [
        {id: 5, viewValue: 'Squirtle', busyInfo: '2'},
        {id: 6, viewValue: 'Psyduck', busyInfo: '5'},
        {id: 7, viewValue: 'Horsea', busyInfo: '3'}
      ]
    },
    {
      status: 'unavailable',
      person: [
        {id: 8, viewValue: 'Charmander', unavailable_until: '12.08.2018'},
        {id: 9, viewValue: 'Vulpix', unavailable_until: '12.02.2018'},
        {id: 10, viewValue: 'Flareon', unavailable_until: '06.02.2018'}
      ]
    }
  ];

  hideInfo() {
    this.assignInfoShow = false;
  }

  showInfo() {
    this.assignInfoShow = true;
  }

  deleteAssign() {
    if (this.item.id > 0) {
      this.assignService.delete(this.item.id).subscribe(data => this.deleted.emit(this.item));
    }


  }

  changed(selectionChange: MatSelectChange) {
    console.log(selectionChange.source.value);

    var personid = this.personControl.value
    var roletype = this.roleControl.value;

    if (personid > 0 && roletype > 0) {

      this.item.assigntype = roletype;
      this.item.resourcetype = 0; // person oder gruppe
      this.item.resourceid = personid;

      console.log(this.item);
      if (this.item.id > 0) {
        this.assignService.update(this.item).subscribe();
      } else {
        this.item.created = new Date().getTime();
        this.assignService.create(this.item).subscribe(data => this.item = data);
      }
    }
  }

  ngOnInit() {
    this.modelToForm();
  }


  public getPersonInfo(info: string): any {


    for (var i of this.assignoptions) {

      for (var s of i.person) {
        if (s.id === this.item.resourceid) {
          if (s[info]) {
            console.log(s[info])
            return s[info];
          }
        }
      }
    }

    return null;


  }

  hasInfo(info: string): boolean {
    return this.getPersonInfo(info) != null;
  }

  modelToForm() {

    this.personControl.setValue(this.item.resourceid);
    this.roleControl.setValue(this.item.assigntype);

  }
}

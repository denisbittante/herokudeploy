import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../person.service";
import {Person} from "../../person-model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;
  personForm: FormGroup;
  editing: boolean;
  id: number = null;
  private readonly mainpage = "persons";


  constructor(private router: Router,
              private route: ActivatedRoute,
              private personsrv: PersonService) {

    this.personForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'shortname': new FormControl(null),
      'space': new FormControl(null),
      'personstatus': new FormControl(null),
      'birthday': new FormControl(null),
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.editing = true;
      this.personsrv.find(this.id).subscribe(data => this.modelToForm(data));
    } else {
      this.editing = false;
    }
  }

  // ACTIONS

  public  update() {
    this.saveFormToModel();
    this.personsrv.update(this.person).subscribe(data => this.router.navigate([this.mainpage]));
    this.routeToMainpage();
  }

  public deletePerson() {
    this.personsrv.delete(this.person.personid).subscribe(data => this.router.navigate([this.mainpage]));
  }

  public cancel() {
    this.router.navigate([this.mainpage]);
  }

  public create() {
    this.saveFormToModel();
    this.personsrv.create(this.person).subscribe(data => this.person = data);
    this.router.navigate([this.mainpage]);
  }

  modelToForm(data: Person) {
    this.person = data;
    this.personForm.get('name').setValue(data.name);
    this.personForm.get('surname').setValue(data.surname);
    this.personForm.get('shortname').setValue(data.shortname);
    this.personForm.get('birthday').setValue(data.birthday);
    this.personForm.get('personstatus').setValue(data.personstatus);
    this.personForm.get('space').setValue(data.space);
  }

  saveFormToModel() {

    var name = this.personForm.get('name').value;
    var surname = this.personForm.get('surname').value;
    var shortname = this.personForm.get('shortname').value;
    var birthday = this.personForm.get('birthday').value;
    var space = this.personForm.get('space').value;
    var personstatus = this.personForm.get('personstatus').value;

    var saveperson = new Person(
      this.id,
      name,
      surname,
      shortname,
      space,
      personstatus,
      birthday,
      new Date().getTime(),
      this.editing == false ? new Date().getTime() : this.person.created
    );
    this.person = saveperson;


  }


}

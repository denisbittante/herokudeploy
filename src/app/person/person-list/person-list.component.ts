import {Component, OnInit} from "@angular/core";
import {PersonService} from "../person.service";
import {Person} from "../person-model";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  searchInput: string;

  personlist: Array<Person>;


  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.list().subscribe(data => this.personlist = data);
  }


  refresh() {
    this.personService.list().subscribe(data => this.personlist = data);
  }

}

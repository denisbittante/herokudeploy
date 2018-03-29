import {Component, OnInit, EventEmitter, Input, Output} from "@angular/core";
import {Person} from "../../person-model";
import {PersonService} from "../../person.service";

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {

  @Input() item: Person;
  @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private personService: PersonService) {
  }

  ngOnInit() {

  }

  public deletePerson() {
    this.personService.delete(this.item.personid).subscribe(data => this.onRefresh.emit(true));
  }


}

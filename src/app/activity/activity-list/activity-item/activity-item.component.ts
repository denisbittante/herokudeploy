import {Component, OnInit, Input} from "@angular/core";
import {Activity} from "../../activity-model";
import {PersonService} from "../../../person/person.service";
import {Person} from "../../../person/person-model";

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  @Input() item: Activity;


  public personInCharge: Person;
  public helper: Person[] = [];

  constructor(private personsrv: PersonService) {
  }


  ngOnInit() {
    console.log(this.personInCharge);

    this.personInCharge = this.getPerson('person_in_charge')[0];
    this.helper = this.getPerson('person_in_charge');

  }

  private getPerson(persId: string) {

    var resultArray: Person[] = []
    for (const item of this.personsrv.persons) {

      if (item.id === this.item[persId]) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }


}

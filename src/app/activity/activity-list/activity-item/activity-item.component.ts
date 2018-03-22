import {Component, OnInit, Input} from "@angular/core";
import {Activity} from "../../activity-model";
import {PersonService} from "../../../person/person.service";
import {Person} from "../../../person/person-model";
import {ActivityService} from "../../activity.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {

  @Input() item: Activity;
  @Output() onRefresh:EventEmitter<boolean> = new EventEmitter<boolean>();

  public personInCharge: Person;
  public helper: Person[] = [];

  constructor(private personsrv: PersonService, private activityService: ActivityService, private router: Router) {
  }


  ngOnInit() {
    console.log(this.personInCharge);

    if (this.getPerson('person_in_charge')) {
      this.personInCharge = this.getPerson('person_in_charge')[0];
    }
    this.helper = this.getPerson('person_in_charge');

  }

  private getPerson(persId: string) {

    var resultArray: Person[] = []
    if (this.item) {
      for (const item of this.personsrv.persons) {

        if (item.id === this.item[persId]) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

  public deleteActivty() {
    this.activityService.delete(this.item.activityid).subscribe(data => this.onRefresh.emit(true)  );
  }

}

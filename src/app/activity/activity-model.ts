import {Person} from "../person/person-model";
import {ActivityType} from "./activity-type-model";
import {Conflict} from "./activity-conflict-list/activity-conflict-model";
/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Activity {

  public id: number;
  public title: string;
  public desc: string;
  public fromDay: Date;
  public fromTime: string;
  public toDay: Date;
  public toTime: string;
  public isAllDayEvent: boolean = false;
  public place: string;
  public person_in_charge: Person;
  public person_helper: Person[];
  public activityType: ActivityType;
  public space: number;
  public status: string = 'o'; // o= open ; f = finished; a = archived; r=released (freigeben)
  public parent_id: number;
  public child_activities: Activity[];
  public label: string[];
  public conflicts: Conflict[];
  public mut_date: Date;
  public create_date: Date;
  public author: Person;

  constructor(title: string, desc: string, fromDay: Date, toDay: Date, person_in_charge: Person, label: string[], conflicts: Conflict[]) {
    this.title = title;
    this.desc = desc;
    this.fromDay = fromDay;
    this.toDay = toDay;
    this.person_in_charge = person_in_charge;
    this.label = label;
    this.conflicts = conflicts;
  }

  public addLabel(label: string) {
    this.label.push(label);
  }

}

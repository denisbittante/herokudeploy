import {Person} from "../person/person-model";
import {ActivityType} from "./activity-type-model";
/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Activity {

  public id: number;
  public title: string;
  public desc: string;
  public fromDay: string;
  public fromTime: string;
  public toDay: string;
  public toTime: string;
  public isAllDayEvent: string = false;
  public place: string;
  public person_in_charge: Person;
  public person_helper: Person[];
  public activityType: ActivityType;
  public space: number;
  public status: string = 'o'; // o= open ; f = finished; a = archived; r=released (freigeben)
  public parent_activity = Activity;
  public label: string[];
  public conflicts: Conflict[];

  constructor() {
  }

  public addLabel(label: string) {
    this.label.push(label);
  }

}

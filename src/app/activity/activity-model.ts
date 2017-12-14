import {Person} from "../person/person-model";
import {ActivityType} from "./activity-type-model";
import {Conflicts} from "./activty-conflict-list/activity-conflict-model";
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
  public conflicts: Conflicts[];

  constructor() {

  }

  public addLabel(label: string) {
    this.label.push(label);
  }

}

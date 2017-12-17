/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Activity {

  public id: number;
  public title: string;
  public desc: string;
  public fromDay: Date;
  public toDay: Date;
  public isAllDayEvent: boolean = false;
  public place: string;
  public person_in_charge: number;
  public person_helper: number[];
  public activityType: number;
  public space: number;
  public status: string = 'o'; // o= open ; f = finished; a = archived; r=released (freigeben)
  public parent_id: Activity;
  public child_activities: Activity[];
  public label: number[];
  public conflicts: number[];
  public mut_date: Date;
  public create_date: Date;
  public author: number;

  constructor(id: number,
              title: string,
              desc: string,
              fromDay: Date,
              toDay: Date,
              isAllDayEvent: boolean = false,
              place: string,
              person_in_charge: number,
              person_helper: number[],
              activityType: number,
              space: number,
              status: string = 'o',
              parent_id: Activity,
              child_activities: Activity[],
              label: number[],
              conflicts: number[],
              mut_date: Date,
              create_date: Date,
              author: number) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.fromDay = fromDay;
    this.toDay = toDay;
    this.isAllDayEvent = isAllDayEvent;
    this.place = place;
    this.person_in_charge = person_in_charge;
    this.person_helper = person_helper;
    this.activityType = activityType;
    this.space = space;
    this.status = status;
    this.parent_id = parent_id;
    this.child_activities = child_activities;
    this.label = label;
    this.conflicts = conflicts;
    this.mut_date = mut_date;
    this.create_date = create_date;
    this.author = author;
  }


  public isSameDate = function () {
    return (
      this.fromDay.getFullYear() === this.toDay.getFullYear() &&
      this.fromDay.getMonth() === this.toDay.getMonth() &&
      this.fromDay.getDate() === this.toDay.getDate()
    );
  }

}

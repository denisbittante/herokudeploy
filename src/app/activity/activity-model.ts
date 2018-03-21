/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Activity {

  public activityid: number;
  public summary: string;
  public description: string;
  public actvityfrom: Date;
  public activityto: Date;
  public isallday: boolean = false;
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
  public updated: Date;
  public created: Date;
  public author: number;

  constructor(activityid ?: number,
              summary ?: string,
              description ?: string,
              actvityfrom ?: number,
              activityto ?: number,
              isallday ?: boolean,
              place ?: string,
              person_in_charge ?: number,
              person_helper ?: number[],
              activityType ?: number,
              space ?: number,
              status ?: string,
              parent_id ?: Activity,
              child_activities ?: Activity[],
              label ?: number[],
              conflicts ?: number[],
              updated ?: number,
              created ?: number,
              author ?: number) {



    this.actvityfrom = new Date();
    this.actvityfrom.setTime(actvityfrom);

    this.activityto = new Date();
    this.activityto.setTime(activityto);

    this.updated = new Date();
    this.updated.setTime(updated)

    this.created = new Date();
    this.created.setTime(created);


    this.activityid = activityid;
    this.summary = summary;
    this.description = description;
    this.isallday = isallday;
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
    this.author = author;
  }


  public isSameDate = function () {

    if (this.fromDay !== 'undefined' && this.toDay !== 'undefined') {
      return (
        this.fromDay.getFullYear() === this.toDay.getFullYear() &&
        this.fromDay.getMonth() === this.toDay.getMonth() &&
        this.fromDay.getDate() === this.toDay.getDate()
      );
    } else {
      return false;
    }


  }

}

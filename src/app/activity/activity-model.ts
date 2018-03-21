/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Activity {

  public activityid: number;
  public summary: string;
  public description: string;
  public actvityfrom: number;
  public activityto: number;
  public updated: number;
  public created: number;
  public activitytype: number;
  public place: string;
  public isallday: boolean = false;
  public space: number;
  public status: number = 0; // o= open ; f = finished; a = archived; r=released (freigeben)
  public parent: number;

  constructor(activityid ?: number,
              summary ?: string,
              description ?: string,
              actvityfrom ?: number,
              activityto ?: number,
              isallday ?: boolean,
              place ?: string,
              activitytype ?: number,
              space ?: number,
              status ?: number,
              parent ?: number,
              updated ?: number,
              created ?: number) {


    this.actvityfrom = actvityfrom;
    this.activityto = activityto;
    this.updated = updated;
    this.created = created;

    this.activityid = activityid;
    this.summary = summary;
    this.description = description;
    this.isallday = isallday;
    this.place = place;
    this.space = space;
    this.status = status;
    this.parent = parent;
    this.activitytype = activitytype;
  }

  public updatedDate = function () {
    var updatedDate = new Date();
    updatedDate.setTime(this.updated);
    return updatedDate;
  }
  public createdDate = function () {
    var createdDate = new Date();
    createdDate.setTime(this.created);
    return createdDate;
  }

  public actvityfromDate = function () {
    var actvityfromDate = new Date();
    actvityfromDate.setTime(this.actvityfrom);
    return actvityfromDate;
  }

  public actvitytoDate = function () {
    var actvitytoDate = new Date();
    actvitytoDate.setTime(this.activityto);
    return actvitytoDate;
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

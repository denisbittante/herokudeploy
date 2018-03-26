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

  public static toDate(str: number): Date {
    if (str != null) {
      if (str > 0) {
        var newDate = new Date();
        newDate.setTime(str);
        newDate.setHours(0, 0, 0, 0)
        return newDate;
      }
    }
    return null;
  }

  public static toTime(str: number): String {
    if (str != null) {
      if (str > 0) {

        var newDate = new Date();
        newDate.setTime(str);
        var hours = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
        var minutes = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
        return hours + ":" + minutes;
      }
    }
    return null;
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

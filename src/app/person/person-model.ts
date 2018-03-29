/**
 * Created by Denis Bittante on 13.12.2017.
 */
export class Person {

  public personid: number;
  public name: string;
  public surname: string;
  public updated: number;
  public created: number;
  public shortname: string;
  public space: number;
  public personstatus: number;
  public birthday: string;

  constructor(personid: number,
              name: string,
              surname: string,
              shortname: string,
              space: number,
              personstatus: number,
              birthday: string,
              updated: number,
              created: number) {
    this.personid = personid;
    this.name = name;
    this.surname = surname;
    this.updated = updated;
    this.created = created;
    this.shortname = shortname;
    this.space = space;
    this.personstatus = personstatus;
    this.birthday = birthday;
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

}

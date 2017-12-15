/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class CalendarEntryModel {

  public title: string;
  public calInfo: string;
  public visibility: number[]; //Space
  public author: number;
  public person: number; //Person
  public calEntryFrom: Date;
  public calEntryTo: Date;
  public allDay: boolean = false;
  public calType: number = 0; // 0 = absent , 1 = present
  public createDate: Date;
  public mutationDate: Date;

  constructor(title: string,
              calInfo: string,
              visibility: number[],
              author: number,
              person: number,
              calEntryFrom: Date,
              calEntryTo: Date,
              allDay: boolean,
              calType: number,
              createDate: Date,
              mutationDate: Date) {

    this.title = title;
    this.calInfo = calInfo;
    this.visibility = visibility;
    this.author = author;
    this.person = person;
    this.calEntryTo = calEntryTo;
    this.calEntryFrom = calEntryFrom;
    this.allDay = allDay;
    this.calType = calType;
    this.createDate = createDate;
    this.mutationDate = mutationDate;
  }

}

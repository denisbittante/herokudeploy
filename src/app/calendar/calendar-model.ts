export class Calendar {

  public calendarid: number;
  public personid: number;
  public created: number;
  public mutated: number;
  public calfrom: number;
  public calto: number;
  public caltype: number;
  public description: string;
  public allDay: boolean;
  public space: number;


  constructor(calendarid: number,
              personid: number,
              created: number,
              mutated: number,
              calfrom: number,
              calto: number,
              caltype: number,
              description: string,
              allDay: boolean,
              space: number) {

    this.calendarid = calendarid;
    this.personid = personid;
    this.created = created;
    this.mutated = mutated;
    this.calfrom = calfrom;
    this.calto = calto;
    this.caltype = caltype;
    this.description = description;
    this.allDay = allDay;
    this.space = space;


  }

}

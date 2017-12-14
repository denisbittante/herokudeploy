/**
 * Created by Denis Bittante on 13.12.2017.
 */
export class ActivityType {

  public id: number;
  public name: string;
  public persons: Person[];

  constructor(id: number, name: string, persons: Person[]) {
    this.id = id;
    this.name = name;
    this.persons = persons;

  }


}

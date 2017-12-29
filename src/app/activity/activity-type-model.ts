/**
 * Created by Denis Bittante on 13.12.2017.
 */
export class ActivityType {

  public id: number;
  public name: string;
  public persons: number[];
  public group: number[];

  constructor(id: number, name: string, persons: number[], group: number[]) {
    this.id = id;
    this.name = name;
    this.persons = persons;
    this.group = group;
  }


}


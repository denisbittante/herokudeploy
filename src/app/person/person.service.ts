import {Person} from "./person-model";
import {validate} from "codelyzer/walkerFactory/walkerFn";
/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class PersonService {

  public persons: Person[] = [
    new Person(1, 'Denis', 'Bittante'),
    new Person(2, 'Emanuel', 'Heizmann'),
    new Person(3, 'Manuela', 'Von Arx Langername')
  ]

  getPerson(id: number) {

    return this.persons.find(this.findId, id);

  }

  findId(person: Person, id: number) {
    return person.id === id;
  }


}

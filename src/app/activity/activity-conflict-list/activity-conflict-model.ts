/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class ConflictModel {

  public id: number;
  public error_number: number;
  public parameter: string[]; // je nach Fehler werden diese Anders interpretiert
  public ignored: boolean = false;


  constructor(id: number, error_number: number, parameter: string[]) {
    this.id = id;
    this.error_number = error_number;
    this.parameter = parameter;
  }

  setIgnored() {
    this.ignored = true;
  }

}

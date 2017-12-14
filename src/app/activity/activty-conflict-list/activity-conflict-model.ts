/**
 * Created by Denis Bittante on 13.12.2017.
 */

export class Conflicts {

  public id: number;
  public errornumber: number;
  public parameter: string; // je nach Fehler werden diese Anders interpretiert
  public ignored: boolean = false;


  constructor(id: number, errornumber: number, parameter: string) {
    this.id = id;
    this.errornumber = errornumber;
    this.parameter = parameter;
  }

  setIgnored() {
    this.setIgnored() = true;
  }

}

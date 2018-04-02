/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class SpaceModel {

  public name: string;
  public desc: string;
  public id: number;

  constructor(name: string,
              desc: string,
              id: number) {

    this.name = name;
    this.desc = desc;
    this.id = id;
  }

}

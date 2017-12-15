/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class SpaceModel {

  public name: string;
  public desc: string;
  public key: string;
  public id: number;
  public tags: string[];
  public activityTypes: {id: number, name;string};


  constructor(name: string,
              desc: string,
              key: string,
              id: number) {

    this.name = name;
    this.desc = desc;
    this.key = key;
    this.id = id;
  }

}

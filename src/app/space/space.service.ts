import {SpaceModel} from "./space-model";
/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class SpaceService {

  public spaces: SpaceModel[] = [
    new SpaceModel('Assembly 99', '', 'VSO', 11),
    new SpaceModel('Versammlung A', '', 'VSO', 12),
    new SpaceModel('Versammlung Spparta', '', 'VSO', 13),
    new SpaceModel('Assembly Organisation', '', 'VSO', 14),
    new SpaceModel('Versammlung Bla ', '', 'VSO', 15),
    new SpaceModel('Versammlung St.Gallen Ost', '', 'VSO', 16),
    new SpaceModel('Versammlung St.Gallen Ost', '', 'VSO', 17),
    new SpaceModel('Versammlung St.Gallen English', '', 'VSO', 18)

  ];

  getSpace(id: number) {

    let space = this.spaces.find(this.checkId, id);
    if (space) {
      return space;
    }
    return new SpaceModel('keine Versammlung konnte gefunden werden', '', 'VSO', 99);

  }

  checkId(space: SpaceModel, id: number) {
    return space.id === id;
  }


}

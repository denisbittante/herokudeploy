import {ConflictModel} from "./activity-conflict-model";
/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class ConflictSerivice {

  public conflicts: ConflictModel[] = [
    new ConflictModel(1, 1, ['12',   '715']),
    new ConflictModel(2, 2, ['234',  '115']),
    new ConflictModel(3, 3, ['1324', '145']),
    new ConflictModel(4, 1, ['134',  '1578']),
    new ConflictModel(5, 2, ['222',  '155']),
  ]


}

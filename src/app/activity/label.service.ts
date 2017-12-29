import {Label} from "./label-model";
/**
 * Created by Denis Bittante on 22.12.2017.
 */

export class LabelService {


  public labels: Label[] = [
    new Label(1, 'Label 01', true),
    new Label(2, 'Label 02', false),
    new Label(3, 'Label 03', true),
    new Label(4, 'Label 05', false)
  ];


}

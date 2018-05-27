import {Assign} from "./assign-model";
export class AssignPageable {

  public content: Array<Assign>;
  public last: boolean;
  public totalPages: number;
  public totalElements: number;
  public first: boolean;
  public numberOfElements: number;
  public sort: string;
  public size: number;
  public number: number;

  constructor(content: Array<Assign>,
              last: boolean,
              totalPages: number,
              totalElements: number,
              first: boolean,
              numberOfElements: number,
              sort: string,
              size: number,
              number: number) {

    this.content = content;
    this.last = last;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
    this.first = first;
    this.numberOfElements = numberOfElements;
    this.sort = sort;
    this.size = size;
    this.number = number;
  }


}

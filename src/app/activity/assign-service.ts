import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Assign} from "./assign-model";


@Injectable()
export class AssignService {

  private readonly URL = 'https://jwplan-activity-service.herokuapp.com';
  private readonly urlAssigns = this.URL + "/assigns";
  private readonly urlAssign = this.URL + "/assign";

  constructor(private http: HttpClient) {
  }

  public create(assign: Assign): Observable<Assign> {
    return this.http.post<Assign>(this.urlAssign + "/new", assign);
  }

  public list(): Observable<Array<Assign>> {
    return this.http.get<Array<Assign>>(this.urlAssigns);
  }

  public find(id: number): Observable<Assign> {
    return this.http.get<Assign>(this.urlAssign + "/" + id);
  }

  public update(assign: Assign): Observable<Assign> {
    return this.http.put<Assign>(this.urlAssign, assign);
  }

  public delete(id: number): Observable<any> {
    const url = this.urlAssign + "/" + id;
    return this.http.delete(url);

  }


}

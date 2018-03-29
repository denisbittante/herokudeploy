/**
 * Created by Denis Bittante on 15.12.2017.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Person} from "./person-model";

/**
 * Created by Denis Bittante on 14.12.2017.
 */
@Injectable()
export class PersonService {

  private readonly URL = 'https://jwplan-identity-service.herokuapp.com';
  private readonly urlPersons = this.URL + "/persons";
  private readonly urlPerson = this.URL + "/person";

  constructor(private http: HttpClient) {
  }

  public create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.urlPerson + "/new", person);
  }

  public list(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>(this.urlPersons);
  }

  public find(id: number): Observable<Person> {
    return this.http.get<Person>(this.urlPerson + "/" + id);
  }

  public update(person: Person): Observable<Person> {
    return this.http.put<Person>(this.urlPerson, person);
  }

  public delete(id: number): Observable<any> {
    const url = this.urlPerson + "/" + id;
    return this.http.delete(url);

  }


}

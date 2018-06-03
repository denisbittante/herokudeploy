import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Calendar} from "./calendar-model";
import {CalendarPageable} from "./calendar-pageable";


@Injectable()
export class CalendarService {

  private readonly URL = 'https://jwplan-calendar-service.herokuapp.com';
  private readonly urlCalendars = this.URL + "/calendars";
  private readonly urlCalendar = this.URL + "/calendar";

  constructor(private http: HttpClient) {
  }

  public create(calendar: Calendar): Observable<Calendar> {
    return this.http.post<Calendar>(this.urlCalendar + "/new", calendar);
  }

  public list(query: string, page: number, pagesize: number): Observable<CalendarPageable> {
    let Params = new HttpParams();
    Params = Params.append('p', '' + page);
    Params = Params.append('ps', '' + pagesize);

    if (query) {
      Params = Params.append('q', query);
    }
    return this.http.get<CalendarPageable>(this.urlCalendars, {params: Params});
  }


  public find(id: number): Observable<Calendar> {
    return this.http.get<Calendar>(this.urlCalendar + "/" + id);
  }

  public update(calendar: Calendar): Observable<Calendar> {
    return this.http.put<Calendar>(this.urlCalendar, calendar);
  }

  public delete(id: number): Observable<any> {
    const url = this.urlCalendar + "/" + id;
    return this.http.delete(url);

  }


}

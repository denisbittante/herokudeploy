import {Activity} from "./activity-model";
import {Injectable} from "@angular/core";
import {LoggingService} from "../shared/logging.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {ActivityPageable} from "./activity-pageable";

/**
 * Created by Denis Bittante on 14.12.2017.
 */
@Injectable()
export class ActivityService {

  private readonly URL = 'https://jwplan-activity-service.herokuapp.com';
  private readonly urlActivities = this.URL + "/activities";
  private readonly urlActivity = this.URL + "/activity";

  constructor(private logger: LoggingService, private http: HttpClient) {
  }

  public create(activity: Activity): Observable<Activity> {
    console.log(activity);
    return this.http.post<Activity>(this.urlActivity + "/new", activity);
  }

  public list(query: string, page: number, pagesize: number): Observable<ActivityPageable> {
    let Params = new HttpParams();
    Params = Params.append('p', '' + page);
    Params = Params.append('ps', '' + pagesize);

    if (query) {
      Params = Params.append('q', query);
    }
    return this.http.get<ActivityPageable>(this.urlActivities, {params: Params});
  }

  public  find(id: number): Observable < Activity > {
    return this.http.get<Activity>(this.urlActivity + "/" + id);
  }

  public  update(activity: Activity): Observable < Activity > {
    return this.http.put<Activity>(this.urlActivity, activity);
  }

  public  delete(id: number): Observable < any > {
    const url = this.urlActivity + "/" + id;
    return this.http.delete(url);

  }


}

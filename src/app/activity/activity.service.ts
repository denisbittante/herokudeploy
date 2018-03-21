import {Activity} from "./activity-model";
import {Injectable} from "@angular/core";
import {LoggingService} from "../shared/logging.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

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

  public addActivity(activity: Activity) {

    this.logger.logStatusChange('addActivity was called');
  }

  public create(activity:Activity):Observable<Activity>{
    console.log(activity);
    return this.http.post<Activity>(this.urlActivity+"/new",activity);
  }
  public list(): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(this.urlActivities);
  }

  public find(id: number): Observable<Activity> {
    return this.http.get<Activity>(this.urlActivity + "/" + id);
  }

  public delete(id: number): Observable<any> {
    const url = this.urlActivity + "/" + id;
    return this.http.delete(url);

  }


}

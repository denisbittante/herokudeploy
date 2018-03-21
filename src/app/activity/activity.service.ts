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

  private readonly URL = 'https://jwplan-activity-service.herokuapp.com/activities';



  constructor(private logger: LoggingService, private http: HttpClient) {
  }

  public addActivity(activity: Activity) {
    this.logger.logStatusChange('addActivity was called');

  }

  public list(): Observable<Array<Activity>> {
    return this.http.get<Array<Activity>>(this.URL);
  }

}

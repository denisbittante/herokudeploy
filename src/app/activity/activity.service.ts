import {Activity} from "./activity-model";
import {Injectable} from "@angular/core";
import {LoggingService} from "../shared/logging.service";
/**
 * Created by Denis Bittante on 14.12.2017.
 */
@Injectable()
export class ActivityService {


  activitylist: Activity[] = [
    new Activity(1,
      'Titel',
      'Beschreibung',
      new Date(),
      new Date(),
      false,
      'No Place',
      1,
      [1, 2],
      1,
      12,
      'o',
      null,
      null,
      [1, 2],
      [125],
      new Date(),
      new Date(),
      1
    )]
    ;

  constructor(private logger: LoggingService) {
  }


  addActivity(activity: Activity) {

    this.logger.logStatusChange('addActivity was called');
    this.activitylist.push(activity);
  }

  getActivities() {
    return this.activitylist.slice();

  }
  getActivity(id:number) {
    return this.activitylist.find( this.findId ,id);
  }


  findId(activity: Activity, id:number) {
    return activity.id === id;
  }


}

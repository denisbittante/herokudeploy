import {ActivityType} from "./activity-type-model";
/**
 * Created by Denis Bittante on 15.12.2017.
 */
export class ActivityTypeService {


  public activitytypes : ActivityType[] = [

    new ActivityType(1, 'Something', [1, 2, 3], [1, 2, 3]),
    new ActivityType(2, 'Best Activtytype', [2, 3], [2, 3]),
    new ActivityType(3, 'Wow Activty', [1, 3], [1, 3]),
    new ActivityType(4, 'Header', [1, 2], [1, 2]),
    new ActivityType(5, 'Fakeactivity', [1], [1]),
    new ActivityType(6, 'Another one', [3], [3]),

  ]


}

import {Activity} from "./activity-model";
import {Person} from "../person/person-model";
import {Conflict} from "./activity-conflict-list/activity-conflict-model";
/**
 * Created by Denis Bittante on 14.12.2017.
 */

export class ActivityService {


  activitylist: Activity[] = [
    new Activity('Titel', 'Erste Beschreibung', new Date(), new Date(), new Person(1, 'Denis', 'Bittante'), ['Anlagendienst', 'Dienst'], [new Conflict(1, 3, 'Parameter,Parameter2')]),
    new Activity('Ganz super langer Titel damit das auch mal gesehen hat.', 'kurze Beschreibung auch hier nix besonderes', new Date(), new Date(), new Person(1, 'Walter', 'Bernhard'), ['Dienst'], null),
    new Activity('Beschreibung mit Blindtext.', 'Mal was langes als Beschreibung ist auch mal lustig wenn es immer immer immer länger wird und hier noch ' +
      'ein wenig blindentext: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis ' +
      'parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, ' +
      'aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ' +
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, ' +
      'viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ulla',
      new Date(), new Date(86400000), new Person(1, 'Walter', 'Bernhard'), ['Dienst'], null)

  ];


  addActivity(activity: Activity) {
    this.activitylist.push(activity);
  }


}

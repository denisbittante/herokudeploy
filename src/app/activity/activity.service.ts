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
      'SACHARJA 1–8',
      'Beschreibung',
      new Date(),
      new Date(),
      false,
      'No Place',
      2,
      [1, 2],
      1,
      12,
      'o',
      null,
      [new Activity(1, 'Lied 146 und Gebet',
        '', new Date(),
        new Date(),
        false, 'No Place',
        1, [1, 2], 1, 12, 'o', null,
        [], [1, 2],
        [125], new Date(), new Date(), 2
      ),
        new Activity(1, 'Einleitende Worte (bis zu 3 Min.)',
          '', new Date(),
          new Date(),
          false, 'No Place',
          1, [1, 2], 1, 12, 'o', null,
          [], [1, 2],
          [], new Date(), new Date(), 2
        ),
        new Activity(1,'SCHÄTZE AUS GOTTES WORT',
        '',new Date(),
        new Date(),
        false, 'No Place',
        1, [1, 2], 1, 12, 'o', null,
        [
          new Activity(1,'SCHÄTZE AUS GOTTES WORT',
            `[Zeige das Video Einführung in Sacharja.] <br>
Sach 8:20-22 — Menschen aus allen Sprachen der Nationen suchen Jehovas Gunst (w14 15. 11. 27 Abs. 14)<br>
Sach 8:23 — Die anderen Schafe unterstützen die Gesalbten gern (w16.01 23 Abs. 4; w09 15. 2. 27 Abs. 14)`
            ,new Date(),
            new Date(),
            false, 'No Place',
            1, [1, 2], 1, 12, 'o', null,
            [], [1, 2],
            [125], new Date(), new Date(), 2)


        ], [1, 2],
        [125], new Date(), new Date(), 2
      ),
        new Activity(1,'UNSER LEBEN ALS CHRIST',
          '',new Date(),
          new Date(),
          false, 'No Place',
          1, [1, 2], 1, 12, 'o', null,
          [
            new Activity(1,'Lied 96',
              '',new Date(),
              new Date(),
              false, 'No Place',
              1, [1, 2], 1, 12, 'o', null,
              [], [1, 2],
              [], new Date(), new Date(), 2
            ),
            new Activity(1,'„Im Predigtdienst geschickter werden: Jeden im Gebiet erreichen“ ',
              'Besprechung. Zeige das Video Predigen bis zum entferntesten Teil der Erde.',new Date(),
              new Date(),
              false, 'No Place',
              1, [1, 2], 1, 12, 'o', null,
              [], [1, 2],
              [], new Date(), new Date(), 2
            ),
            new Activity(1,'Versammlungsbibelstudium ',
              ' kr Kap. 22 Abs. 17-24, Wiederholungsfragen „Wie real ist das Königreich für dich?“',new Date(),
              new Date(),
              false, 'No Place',
              1, [1, 2], 1, 12, 'o', null,
              [], [1, 2],
              [], new Date(), new Date(), 2
            ),
            new Activity(1,'Wiederholung und Vorschau auf nächste Woche',
              '',new Date(),
              new Date(),
              false, 'No Place',
              1, [1, 2], 1, 12, 'o', null,
              [], [1, 2],
              [], new Date(), new Date(), 2
            ),
            new Activity(1,'Lied 134 und Gebet',
              '',new Date(),
              new Date(),
              false, 'No Place',
              1, [1, 2], 1, 12, 'o', null,
              [], [1, 2],
              [], new Date(), new Date(), 2
            )

          ], [1, 2],
          [], new Date(), new Date(), 2
        )


      ],
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

  getActivity(id: number) {
    return this.activitylist.find(this.findId, id);
  }


  findId(activity: Activity, id: number) {
    return activity.id === id;
  }


}

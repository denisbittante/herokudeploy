/**
 * Created by Denis Bittante on 15.12.2017.
 */
import {Injectable} from "@angular/core";
import {CalendarEntryModel} from "./calendar-model";
@Injectable()
export class CalendarService {


  public calenderentries: CalendarEntryModel[] = [
    new CalendarEntryModel("Weg für eine Weile", 'Keine', [1, 2], 5, 1, new Date(), new Date(), false, 0, new Date(), new Date()),
    new CalendarEntryModel("Weg für eine Weile", 'Keine', [1, 2], 7, 1, new Date(), new Date(), false, 0, new Date(), new Date()),
    new CalendarEntryModel("Weg für eine Weile", 'Keine', [1, 2], 8, 1, new Date(), new Date(), false, 0, new Date(), new Date()),
    new CalendarEntryModel("Weg für eine Weile", 'Keine', [1, 2], 1, 1, new Date(), new Date(), false, 0, new Date(), new Date())
  ]

}

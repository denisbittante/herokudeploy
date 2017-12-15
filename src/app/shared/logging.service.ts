/**
 * Created by Denis Bittante on 14.12.2017.
 */
export class LoggingService {

  logStatusChange(status: string) {
    console.log(new Date() + " Info: " + status);
  }


}

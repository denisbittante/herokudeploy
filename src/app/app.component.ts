import {Component} from '@angular/core';
import {print} from "util";
import {printLine} from "tslint/lib/verify/lines";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onActivityCreated(infos: {name: string}) {

    console.log('Was Clicked ' + infos.name);

  }

}

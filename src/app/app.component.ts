import {Component, OnInit} from '@angular/core';
import {SpaceService} from "./space/space.service";
import {SpaceModel} from "./space/space-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  spaces: SpaceModel[];

  onActivityCreated(infos: {name: string}) {

    console.log('Was Clicked ' + infos.name);

  }

  constructor(private spacesrv: SpaceService) {

  }

  ngOnInit() {
   

  }

}

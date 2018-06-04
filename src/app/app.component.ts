import {Component, OnInit} from "@angular/core";
import {SpaceService} from "./space/space.service";
import {SpaceModel} from "./space/space-model";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  spaces: SpaceModel[];
  authService: AuthService;
  onActivityCreated(infos: {name: string}) {
    console.log('Was Clicked ' + infos.name);
  }

  constructor(private spacesrv: SpaceService, private authSer: AuthService) {
    this.authService = authSer;
  }

  ngOnInit() {


  }

  onLogout() {
    this.authService.logout();
  }

}

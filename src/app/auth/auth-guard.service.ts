import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
/**
 * Created by Denis Bittante on 03.06.2018.
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();

  }

}

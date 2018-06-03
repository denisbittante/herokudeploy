import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by Denis Bittante on 03.06.2018.
 */
@Injectable()
export class AuthService {

  token: string;
  testUser = "test@test.test";
  testPw = "test";


  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {

  }

  signinUser(email: string, password: string) {

    if (email == this.testUser && password == this.testPw) {
      this.token = "isLoggedIn";
      console.log("Is Logged In");
      this.router.navigate(['/']);
    }else{
      console.log("Is NOT Logged In");

    }
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


}

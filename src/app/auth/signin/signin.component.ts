import {Component, OnInit} from "@angular/core";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin: FormGroup;

  constructor(private authService: AuthService) {
    this.signin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;

    console.log("E-Mail: " + email);
    console.log("Password: " + password);
    this.authService.signinUser(email, password);

    if (this.authService.isAuthenticated()){

    }

  }


}

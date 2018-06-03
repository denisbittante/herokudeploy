import {Component, OnInit} from "@angular/core";
import {NgForm, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;

  constructor(private authService: AuthService) {
    this.signup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;

    console.log("E-Mail: " + email);
    console.log("Password: " + password);
  }

}

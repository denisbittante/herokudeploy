import {Component, OnInit} from "@angular/core";
import {PersonService} from "../../person.service";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../person-model";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public item: Person;
  private id;

  constructor(private personService: PersonService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });

    this.personService.find(this.id).subscribe(data => this.item = data);
  }

  ngOnInit() {
  }

}

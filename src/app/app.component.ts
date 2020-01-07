import { FootballService } from "./football.service";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Global Logic Front-end task";

  footballData;

  matchTrigger: boolean;

  matchesData;

  availableID = [
    2000,
    2001,
    2002,
    2003,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2021
  ];

  constructor(private footballService: FootballService) {}

  showConfig() {
    this.footballService
      .getCompetitions()
      .subscribe(data => (this.footballData = data.competitions));
  }

  showMatches(id) {
    this.matchTrigger = true;
    this.footballService
      .getMatches(id)
      .subscribe(data => (this.matchesData = data.matches[0]));
  }
}

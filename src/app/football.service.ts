import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

interface Competitions {
  count: number;
  filters: string;
  competitions: Array<any>;
  matches: Array<any>;
}

@Injectable({
  providedIn: "root"
})
export class FootballService {
  httpOptions = {
    headers: new HttpHeaders({
      "X-Auth-Token": "0c2047e63f8a4559b1e7a3afefae5ec8"
    })
  };

  url = "https://api.football-data.org/v2/competitions";

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<Competitions> {
    return this.http.get<Competitions>(this.url, this.httpOptions);
  }

  getMatches(id): Observable<Competitions> {
    // let params = new HttpParams().get('id');
    let headers = new HttpHeaders().set(
      "X-Auth-Token",
      "0c2047e63f8a4559b1e7a3afefae5ec8"
    );
    return this.http.get<Competitions>(`${this.url}/${id}/matches?matchday=1`, {
      headers
    });
  }
}

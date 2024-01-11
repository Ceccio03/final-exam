import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  url = "https://restcountries.com/v3.1/region/europe";
  selectedCountry = '';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<any>(this.url).pipe(
      // map(dataObj => dataObj.results),
      catchError(err => {
        console.log(err);
        return []
      })
    )
  }

  getSingleCountry(name: string) {
    return this.http.get<Country>(this.url + name);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCountries() {
    return [
      {
        "country": "Algeria",
        "countryCode": "DZ",
        "dialingCode": "+213"
      },
      {
        "country": "Algeria",
        "countryCode": "DZ",
        "dialingCode": "+213"
      }
    ]
  }
}

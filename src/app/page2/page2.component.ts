import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  countries: any;
  model = new User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.countries = this.userService.getCountries();
  }

}

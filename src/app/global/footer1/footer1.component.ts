import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements OnInit {
  quoteImage = "../../../assets/icons/Icon material-format-quote.svg";
  fbIcon = "../../../assets/icons/facebook (1).svg";
  igIcon = "../../../assets/icons/instagram.svg";
  twitterIcon = "../../../assets/icons/twitter.svg";

  constructor() { }

  ngOnInit(): void {
  }

}

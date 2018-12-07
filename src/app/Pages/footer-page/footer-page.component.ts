import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  public d: any;
  public n: any;

  constructor() { }

  ngOnInit() {
    this.d = new Date();
    this.n = this.d.getFullYear();

  }

}

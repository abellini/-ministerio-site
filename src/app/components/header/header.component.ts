import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'me-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    
  public pageTitle = 'Ministério Eucarístico';

  constructor() {
  }

  ngOnInit() {
    
  }

  startSearch() {

  }
}

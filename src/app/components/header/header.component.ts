import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'me-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    
  public pageTitle = 'Ministério Eucarístico';
  public howare = 'Quem somos';
  public wakeup = 'Despertai';
  public voe = 'VOE';
  public pleno = 'Pleno';
  public kids = 'Kids';
  public ide = 'Kids';
  public comunite = 'Comunidade';
  public depo = 'Depoimentos';
  public loja = 'Loja Virtual';

  constructor() {
  }

  ngOnInit() {
    
  }

  startSearch() {

  }
}

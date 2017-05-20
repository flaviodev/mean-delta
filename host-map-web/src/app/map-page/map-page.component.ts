import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/Localizacao.model";

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  localizacao:Localizacao = new Localizacao();

  exibirLocalizacao(localizacao:Localizacao):void {
    this.localizacao = localizacao;
  }

  constructor() { }

  ngOnInit() {
  }

}

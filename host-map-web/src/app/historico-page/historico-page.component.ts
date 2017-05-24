import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/Localizacao.model";

@Component({
  selector: 'fd-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

  historicos: Array<Localizacao> = [ new Localizacao(
    33.749,-121.8914, "FaceBook", "12.23.22.33", "United States", "California", "CA", "San Francisco", "facebook.com")];

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import {Localizacao} from "./model/Localizacao.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localizacao:Localizacao = new Localizacao();

  exibirLocalizacao(localizacao:Localizacao):void {
    this.localizacao = localizacao;
  }

}

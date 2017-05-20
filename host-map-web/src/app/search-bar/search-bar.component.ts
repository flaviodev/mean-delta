import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Localizacao} from "../model/Localizacao.model";

@Component({
  selector: 'fd-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class FdSearchBarComponent implements OnInit {

  dominio: String;

  @Output()
  emiterLocalizacao: EventEmitter<Localizacao> = new EventEmitter<Localizacao>();

  constructor(private httpClient: HttpClientService) {

  }

  ngOnInit() {

  }

  pesquisar() {

    this.httpClient
      .get('http://ip-api.com/json/' + this.dominio)
      .subscribe(
        (data) => {
          this.emiterLocalizacao.emit(data);
        },
        (error) => console.error(error)
      );
  }
}

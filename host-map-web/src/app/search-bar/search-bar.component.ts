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
          this.gravarHistorico(data);
          this.emiterLocalizacao.emit(data);
        },
        (error) => console.error(error)
      );
  }

  gravarHistorico(_data) {

    let localizacao: Localizacao = new Localizacao();
    localizacao.id = "";
    localizacao.dominio = this.dominio;
    localizacao.isp = _data.isp;
    localizacao.query = _data.query;
    localizacao.lat = _data.lat;
    localizacao.lon = _data.lon;
    localizacao.country = _data.country;
    localizacao.regionName = _data.regionName;
    localizacao.region = _data.region;
    localizacao.city = _data.city;
    localizacao.date = new Date();

    this.httpClient
      .post('http://localhost:8080/salvar', localizacao)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.error(error)
      );
  }
}

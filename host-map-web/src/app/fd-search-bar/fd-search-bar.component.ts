import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'fd-search-bar',
  templateUrl: './fd-search-bar.component.html',
  styleUrls: ['./fd-search-bar.component.css']
})
export class FdSearchBarComponent implements OnInit {

  dominio: String;

  @Output()
  localizacao: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClientService) {

  }

  ngOnInit() {

  }

  pesquisar() {

    this.httpClient
      .get('http://ip-api.com/json/' + this.dominio)
      .subscribe(
        (data) => {
          this.localizacao.emit(data);
        },
        (error) => console.error(error)
      );
  }
}

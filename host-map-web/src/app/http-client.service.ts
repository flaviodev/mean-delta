import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class HttpClientService {

  constructor(private _http: Http) {
  }

  get(url: string) {
    return this._http.get(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  post(url: string, data: any) {
    const body = JSON.stringify(data);

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    
    return this._http.post(url, body, {headers : headers})
      .map((_data) => _data.json())
      .catch(error => error.json());
  }

  put(url: string, data: any) {
    const body = JSON.stringify(data);

    return this._http.put(url, body)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  delete(url: string) {
    return this._http.delete(url)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


}

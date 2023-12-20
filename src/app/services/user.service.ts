import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  public url = environment.apiURL;

  register(data: any): Observable<any>{
    return this._httpClient.post(this.url + '/user/register', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}

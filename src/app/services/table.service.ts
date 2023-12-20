import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public tableData: any = '../../assets/tableData.json';
  constructor( private _httpClient: HttpClient) { }

  getTableData(): Observable<any>{
   return this._httpClient.get(this.tableData)
  }
}

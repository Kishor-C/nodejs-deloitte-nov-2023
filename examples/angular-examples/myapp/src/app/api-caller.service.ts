import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private _http : HttpClient) { }

  // data is a javascript object with _id, name & phone
  storeInRealApi(data : any) : Observable<any> {
    let url = 'http://localhost:9999/profile';
    return this._http.post(url, data);
  }

  // methodName(arguments: type) : type { } 
  // fetchFakeApi() : Observable<any> { } 
  fetchFakeApi() : Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this._http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Date } from './date';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiURL: string = 'http://localhost:49178/api';

  constructor(private httpClient: HttpClient) { }

  public getBiweeklyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/biweeklypaydate/${stuff}`);
  }

  public getWeeklyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/weeklypaydate/${stuff}`);
  }
}


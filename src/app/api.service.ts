import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Date } from './date';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiURL: string = 'http://localhost:49178/api';

  constructor(private httpClient: HttpClient) { }

  public getBimonthlyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/bimonthlypaydate/${stuff}`);
  }

  public getMonthlyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/monthlypaydate/${stuff}`);
  }
  
  public getBiweeklyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/biweeklypaydate/${stuff}`);
  }
  
  public getWeeklyFuturePayDate(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/weeklypaydate/${stuff}`);
  }

  public getBiweeklyFuturePayThreeMonth(stuff){
    return this.httpClient.get<Date>(`${this.apiURL}/calculate/givendate/biweeklypaythree/${stuff}`);
  }
}


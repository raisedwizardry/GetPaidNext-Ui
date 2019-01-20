import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-paid-next-ui';
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getWeeklyFuturePayDate('2012-12-25').subscribe((res)=>{
      console.log(res.results);
    });
    this.apiService.getBiweeklyFuturePayDate('2012-12-25').subscribe((res)=>{
      console.log(res.results);
    });
  };
}

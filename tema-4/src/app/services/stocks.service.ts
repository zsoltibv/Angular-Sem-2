import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpService: HttpClient) { }

  getStockInfo(symbol: string): Observable<any> {
    return this.httpService.get("https://api.twelvedata.com/quote?symbol=" + symbol + "&apikey=29d9c89c7bfd4566b093fe708dbd76e5");
  }
}

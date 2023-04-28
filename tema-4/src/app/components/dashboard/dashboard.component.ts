import { StocksService } from './../../services/stocks.service';
import { Component } from '@angular/core';
import { timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private stocksService: StocksService) {

  }

  symbol: string = "Meta";
  stockInfo: any;
  listOfPopularStocks: any = [];
  listOfPopularSymbols: any = ['Meta', 'AAPL', "AMZN"];

  ngOnInit(): void {
    this.fetchPopularStocks();

    // Fetch stock prices every 5 seconds
    timer(5000).pipe(take(1)).subscribe(() => {
      this.fetchPopularStocks();
    });
  }

  fetchPopularStocks(): void {

    this.listOfPopularStocks = [];
    for (let i = 0; i < this.listOfPopularSymbols.length; i++) {
      this.stocksService.getStockInfo(this.listOfPopularSymbols[i]).subscribe((response) => {
        this.listOfPopularStocks.push(response);
      })
    }
  }

  getStock() {
    this.stocksService.getStockInfo(this.symbol).subscribe((response) => {
      this.stockInfo = response;
    })
  }
}

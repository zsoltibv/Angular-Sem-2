import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-block',
  templateUrl: './stock-block.component.html',
  styleUrls: ['./stock-block.component.scss']
})
export class StockBlockComponent {
  @Input() stockInfo: any;

  ngOnInit(): void {
    console.log(this.stockInfo);
  }
}

import { TableItem } from './../models/TableItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableItemService {

  constructor() { }

  listOfItems: TableItem[] = [
    {
      id: 1,
      name: "Table",
      image: "https://www.ikea.com/ph/en/images/products/lagkapten-alex-desk-white__1022428_pe832716_s5.jpg?f=s",
      supply: 10
    }
  ]

  public GetAllTableItems() {
    return this.listOfItems;
  }

  public DecreaseSupplyCount(item: TableItem) {
    item.supply--;
  }
}

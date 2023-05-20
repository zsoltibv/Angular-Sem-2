import { Injectable } from '@angular/core';
import { TableItem } from "../models/TableItem";

@Injectable({
  providedIn: 'root'
})
export class TableOperationsService {

  private listOfItems: TableItem[];

  constructor() {
    this.listOfItems = [];
  }

  public getListOfItems(): TableItem[] {
    return this.listOfItems;
  }

  public addListItem(item: TableItem): void {
    this.listOfItems.push(item);
  }

  public removeListItem(item: TableItem): void {
    this.listOfItems.splice(this.listOfItems.indexOf(item));
  }

  public decreaseListItemSupply(item: TableItem): void {
    item.supply--;
  }
}

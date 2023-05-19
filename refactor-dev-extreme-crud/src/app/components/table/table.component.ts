import { TableItemService } from './../../services/table-item.service';
import { Component, ViewChild } from '@angular/core';
import { TableItem } from "../../models/TableItem";
import { DxDataGridComponent } from "devextreme-angular";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  listOfItems: TableItem[] = [];
  listOfSelectedItems: TableItem[] = [];
  isSelected: boolean = false;
  addItemPopUp: boolean = false;

  @ViewChild("listOfItemsUI") listOfItemsUI!: DxDataGridComponent;

  constructor(private tableItemService: TableItemService) {
    this.listOfItems = this.tableItemService.listOfItems;
  }

  public buyItem() {
    this.tableItemService.DecreaseSupplyCount(this.listOfSelectedItems[0]);
  }

  public addItem(){
    this.addItemPopUp = true;
  }

  public editItem(){

  }

  selectionChanged($event) {
    this.isSelected = false
    $event.selectedRowsData.forEach(row => {
      if (row.supply == 0)
        this.isSelected = true
    });
    this.listOfSelectedItems = this.listOfItemsUI.instance.getSelectedRowsData()
  }
}

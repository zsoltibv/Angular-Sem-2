import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from "devextreme-angular";
import { TableOperationsService } from "src/app/services/table-operations.service";
import { TableItem } from "src/app/models/TableItem";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild("itemsGrid") itemsGrid!: DxDataGridComponent

  public listOfItems: TableItem[];
  public selectedItems: TableItem[];

  public isButtonDisabled: boolean = false;
  public isEditDisabled: boolean = true;

  constructor(private tableOperations: TableOperationsService) {
    this.listOfItems = tableOperations.getListOfItems();
    this.selectedItems = [];
  }



  public selectionChanged($event) {
    this.isButtonDisabled = false
    $event.selectedRowsData.forEach(row => {
      if (row.supply == 0)
        this.isButtonDisabled = true

    });
    this.selectedItems = this.itemsGrid.instance.getSelectedRowsData()
    if (this.selectedItems.length == 1) {
      this.isEditDisabled = false;
    } else {
      this.isEditDisabled = true;
    }
  }
}

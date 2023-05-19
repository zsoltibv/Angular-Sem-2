import { Component } from '@angular/core';
import { TableItemService } from "src/app/services/table-item.service";
import { TableItem } from "src/app/models/TableItem";
import { FormBuilder } from '@angular/forms';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  listOfItems: TableItem[] = [];

  constructor(private tableItemService: TableItemService, private formBuilder: FormBuilder) {
    this.listOfItems = this.tableItemService.listOfItems;
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    supply: '',
    id: 0,
    image: ''
  })

  onFormSummit($event) {

    $event.preventDefault()
    console.log(this.checkoutForm.value)
    notify({ message: 'You have created a new item' }, 'success', 3000)
    const newId: number = this.listOfItems.length
    this.checkoutForm.value.id = newId
    //this.listOfItems.push(this.checkoutForm.value)

    this.checkoutForm.reset()

    //this.addItemPopUp = false;
    //output decorator to close form off
  }
}

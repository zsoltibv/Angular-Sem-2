import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TableComponent } from './components/table/table.component';
import { AddTableItemComponent } from './components/add-table-item/add-table-item.component';
import { EditTableItemComponent } from './components/edit-table-item/edit-table-item.component';
import { DxButtonModule, DxDataGridModule, DxPopupModule, DxTextBoxModule, DxToastModule, DxTooltipModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TableComponent,
    AddTableItemComponent,
    EditTableItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxTooltipModule,
    DxTextBoxModule,
    DxPopupModule,
    DxValidatorModule,
    ReactiveFormsModule,
    FormsModule,
    DxToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

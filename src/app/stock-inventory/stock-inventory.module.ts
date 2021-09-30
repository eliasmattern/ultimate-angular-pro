import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './coponnents/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './coponnents/stock-selector/stock-selector.component';
import { StockProductsComponent } from './coponnents/stock-products/stock-products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}

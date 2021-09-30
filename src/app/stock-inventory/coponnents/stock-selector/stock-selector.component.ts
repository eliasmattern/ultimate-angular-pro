import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" *ngIf="parent" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <input
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity"
        />
        <button type="button" (click)="onAdd()">Add stock</button>
      </div>
    </div>
  `,
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup | undefined;

  @Input()
  products: Product[] | undefined;

  @Output()
  added: EventEmitter<any> = new EventEmitter<any>();

  onAdd() {
    this.added.emit(this.parent?.get('selector')?.value);
  }
}

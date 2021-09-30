import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { mainDiagnosticsForTest } from '@angular/compiler-cli/src/main';

@Component({
  selector: 'stock-products',
  styleUrls: ['stock-products.component.scss'],
  template: `
    <div class="stock-product" *ngIf="parent" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">{{ item.value.product_id }}</div>
          </div>
          <input
            type="number"
            step="10"
            min="10"
            max="1000"
            formControlName="quantity"
            [value]="item.value.quantity"
          />
          <button type="button" (click)="onRemove(item, i)">Remove</button>
        </div>
      </div>
    </div>
  `,
})
export class StockProductsComponent {
  @Input()
  parent: FormGroup | undefined;
  get stocks() {
    return (this.parent?.get('stock') as FormArray).controls;
  }

  @Output()
  removed: EventEmitter<any> = new EventEmitter<any>();

  onRemove(item: any, index: number) {
    this.removed.emit({ item, index });
  }
}

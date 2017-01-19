import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';
import { Size } from './size';


@Component({
  selector: 'purchase',
  templateUrl: './app/purchase.component.html'

})

export class PurchaseComponent{
  @Input() sizes: Size;
  @Output() purchaseSender = new EventEmitter();

  size: string = null;
  displaySizes: any[] = Object.keys(sizes);

}

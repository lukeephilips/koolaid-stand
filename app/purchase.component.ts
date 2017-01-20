import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';
import { Size } from './size';


@Component({
  selector: 'purchase',
  templateUrl: './app/purchase.component.html'

})

export class PurchaseComponent{
  @Output() purchaseSender = new EventEmitter();
  @Output() sizeSender = new EventEmitter();
  @Input() sizes: Size;
  size: string = null;
  displaySizes: any[] = []

  ngOnInit() {
    this.displaySizes = Object.keys(this.sizes);
  }
  purchase(purchasedSize: string) {
    this.purchaseSender.emit(purchasedSize);
  }
  sendSize(size){
    this.sizeSender.emit(size);
  }
}

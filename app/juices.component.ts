import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';
import { Size } from './size';

@Component({
  selector: 'juices',
  templateUrl: './app/juices.component.html'

})

export class JuicesComponent{
  @Input() freshjuice: Koolaid[];
  @Input() filterAttribute: string;
  @Input() sizes: Size;
  @Output() selectedKegSender = new EventEmitter();
  @Input() selectedSize: Size;

  size: string = null;
  selectedKeg: Koolaid = null;

  calculatedPrice: int = 0;


  // displaySizes: any[] = []
  getServed(keg: Koolaid, purchasedSize: string){
    keg.quantity -= this.sizes[purchasedSize];
  }
  selectKeg(keg){
    this.selectedKegSender.emit(keg);

  }
  kegLevel(kegLevel: number) {
    if (kegLevel <= 360) {
      return "dangerouslyLow";
    } else if (kegLevel <= 1000) {
      return "keepDrinking";
    } else {
      return "bringAllYrFwendz";
    }
  }
  surgePrice(keg, size){
    console.log(size)
    if (size){
      if (keg.quantity >= 1000) {
        this.calculatedPrice = Math.round(keg.price * this.sizes[size]);
      } else if (keg.quantity > 360) {
        this.calculatedPrice = Math.round(keg.price * this.sizes[size] * .5);
      } else {
        this.calculatedPrice = 2;
      };
    }
  }
  
  tapped(quantity){
    if (quantity <= 0) {
      return 0;
    } else {
      return quantity;
    };
  }
  filter(ingredient){
    this.filterAttribute = ingredient;
  }
  kegMeter(quantity: number){
    if (quantity <= 0) {
      return 0;
    } else
    return ((quantity / 1984) * 100);
  }
}

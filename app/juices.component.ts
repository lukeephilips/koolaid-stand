import { Component, Input } from '@angular/core';
import { Koolaid } from './koolaid';



@Component({
  selector: 'juices',
  templateUrl: './app/juices.component.html'

})

export class JuicesComponent{
  @Input() freshjuice: Koolaid[];
  @Input() filterAttribute: string;
  // @Input() sizes: Size;
  // size: string = null;
  // displaySizes: any[] = []

  kegLevel(kegLevel: number) {
    if (kegLevel <= 64) {
      return "dangerouslyLow";
    } else if (kegLevel <= 1000) {
      return "keepDrinking";
    } else {
      return "bringAllYrFwendz";
    }
  }
  surgePrice(keg){
    if (keg.quantity >= 1000) {
      return keg.price;
    } else if (keg.quantity > 64) {
      return keg.price -2;
    } else {
      return 2;
    };
  }
  tapped(quantity){
    if (quantity <= 0) {
      return "tapped";
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

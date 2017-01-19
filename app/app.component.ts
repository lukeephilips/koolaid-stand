import { Component, OnInit } from '@angular/core';
import { Koolaid } from './koolaid';
import { Size } from './size';
import { JuiceService } from './juice.service';
import { EditJuiceComponent } from './edit-juice.component';
import { NewJuiceComponent } from './new-juice.component';
import { FilterJuiceComponent } from './filter-juice.component';
import { PurchaseComponent } from './purchase.component';



@Component({
  selector: 'app-root',
  providers: [JuiceService],
  templateUrl: './app/app.component.html'
})

export class AppComponent {

  selectedKeg: Koolaid = null;
  sizes: Size = new Size();
  filterAttribute: string = null;

  freshjuice: Koolaid[];
  constructor(private juiceService: JuiceService) {}
  displayIngredients: any[] = [];

  getJuice() {
    this.freshjuice = this.juiceService.getJuice();
  }
  ngOnInit(): void {
    this.getJuice();
    let that = this;
    this.freshjuice.forEach(function(juice){
      that.displayIngredients.push(juice.secretIngredient);
    });
  }

  editKeg(keg){
    this.selectedKeg = keg;
  }
  addJuice(newJuice){
      this.freshjuice.push(newJuice);
  }


  getServed(keg: Koolaid, purchasedSize: string){

    keg.quantity -= this.sizes[purchasedSize];
  }

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

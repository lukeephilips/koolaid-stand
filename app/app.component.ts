import { Component, OnInit } from '@angular/core';
import { Koolaid } from './koolaid';
import { JuiceService } from './juice.service';
import { EditJuiceComponent } from './edit-juice.component';
import { NewJuiceComponent } from './new-juice.component';
import { FilterJuiceComponent } from './new-juice.component';


@Component({
  selector: 'app-root',
  providers: [JuiceService],
  templateUrl: './app/app.component.html'
})

export class AppComponent {

  selectedKeg: Koolaid = null;
  size: string = null;
  sizes: Sizes = new Sizes();
  displaySizes: any[] = Object.keys(this.sizes);
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
  return ((quantity / 1984) * 100);
}

}
export class Sizes {
  constructor() {};
  public taster: number = 4;
  public pint: number = 12;
  public howler: number = 32;
  public growler: number = 64;
  public boot: number = 67;
  public bucket: number = 640;
  public ducket: number = 1280;
  public keg: number = 1984;
}

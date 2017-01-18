import { Component, OnInit } from '@angular/core';
import { Koolaid } from './koolaid';
import { JuiceService } from './juice.service';


@Component({
  selector: 'app-root',
  providers: [JuiceService],
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  name: string;
  flavor: string;
  price: number;
  secretIngredient: string;
  addKeg: boolean = false;
  selectedKeg: Koolaid = null;
  size: string = null;
  sizes: Sizes = new Sizes();
  displaySizes: any[] = Object.keys(this.sizes);

  freshjuice: Koolaid[];
  constructor(private juiceService: JuiceService) {}

  getJuice() {
    this.freshjuice = this.juiceService.getJuice();
  }
  ngOnInit(): void {
      this.getJuice();
      console.log(this.displaySizes)
  }

  showAdd() {
    this.addKeg = true;
  }
  hideAdd() {
    this.addKeg = false;
  }
  editKeg(keg){
    this.selectedKeg = keg;
  }
  hideEdit() {
    this.selectedKeg = null;
  }

  newJuice() {
    this.freshjuice.push(new Koolaid(this.name, this.flavor, this.price, this.secretIngredient));
    this.addKeg = false;
  }
  getServed(keg: Koolaid, purchasedSize: string){
    console.log(purchasedSize)

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
    if (keg.quantity >= 1000)
    return keg.price *
  }

};

export class Sizes {
  constructor() {};
  public taster: number = 4;
  public pint: number = 12;
  public howler: number = 32;
  public growler: number = 32;
  public bucket: number = 640;
  public keg: number = 1984;
}

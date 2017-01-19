import { Component, OnInit } from '@angular/core';
import { Koolaid } from './koolaid';
import { Size } from './size';
import { JuiceService } from './juice.service';
import { EditJuiceComponent } from './edit-juice.component';
import { NewJuiceComponent } from './new-juice.component';
import { FilterJuiceComponent } from './filter-juice.component';
import { PurchaseComponent } from './purchase.component';
import { JuicesComponent } from './juices.component';




@Component({
  selector: 'app-root',
  providers: [JuiceService],
  templateUrl: './app/app.component.html'
})

export class AppComponent {

// variables used between subpages
  selectedKeg: Koolaid = null;
  filterAttribute: string = null;
  displayIngredients: any[] = [];

// instantiated Objects
  constructor(private juiceService: JuiceService) {}
  freshjuice: Koolaid[];
  sizes: Size = null;

  getJuice() {
    this.freshjuice = this.juiceService.getJuice();
  }
  ngOnInit(): void {
    this.sizes = new Size();
    this.getJuice();
    let that = this;
    this.freshjuice.forEach(function(juice){
      that.displayIngredients.push(juice.secretIngredient);
    });
  }
  
  // Methods to trigger subpages
  filter(ingredient){
    this.filterAttribute = ingredient;
  }
  editKeg(keg){
    this.selectedKeg = keg;
  }
  addJuice(newJuice){
      this.freshjuice.push(newJuice);
  }
}

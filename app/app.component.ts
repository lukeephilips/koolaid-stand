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


  freshjuice: Koolaid[];
  constructor(private juiceService: JuiceService) {}

  getJuice() {
    this.freshjuice = this.juiceService.getJuice();
  }
  ngOnInit(): void {
      this.getJuice();
  }
  showAdd() {
    this.addKeg = true;
  }
  hideAdd() {
    this.addKeg = false;
  }
  editKeg(keg){
    this.selectedKeg = keg;
    console.log(keg);
  }
  hideEdit() {
    this.selectedKeg = null;
  }
  newJuice() {
    console.log(this.name)
    this.freshjuice.push(new Koolaid(this.name, this.flavor, this.price, this.secretIngredient));
    console.log(this.freshjuice);
    this.addKeg = false;
  }
};

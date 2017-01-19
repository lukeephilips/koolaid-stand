import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';

@Component({
  selector: 'new-juice',
  templateUrl: './app/new-juice.component.html'

})

export class NewJuiceComponent{
  @Input() freshjuice: Koolaid[];
  @Output() newJuiceSender = new EventEmitter();

  addKeg: boolean = false;
  name: string;
  flavor: string;
  price: number;
  secretIngredient: string;

  newJuice() {
    var newJuice: Koolaid = new Koolaid(this.name, this.flavor, this.price, this.secretIngredient);
    this.newJuiceSender.emit(newJuice);
    this.addKeg = false;
  }
  hideAdd() {
    this.addKeg = false;
  }
  showAdd() {
    this.addKeg = true;
  }
}

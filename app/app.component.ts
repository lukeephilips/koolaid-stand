import { Component } from '@angular/core';
import { Koolaid } from './koolaid';


@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  name: string;
  flavor: string;
  price: number;
  secretIngredient: string;

  freshjuice: Koolaid[] = [new Koolaid("Juicy Fruit", "Fruity juice", 5,"cyanide")];


  newJuice() {
    console.log(this.name)
    this.freshjuice.push(new Koolaid(this.name, this.flavor, this.price, this.secretIngredient));
    console.log(this.freshjuice);
  }

}

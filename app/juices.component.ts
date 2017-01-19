import { Component, Input } from '@angular/core';
import { Koolaid } from './koolaid';



@Component({
  selector: 'juices',
  templateUrl: './app/juices.component.html'

})

export class JuicesComponent{
  name: string;
  flavor: string;
  price: number;
  secretIngredient: string;
  
  @Input() freshjuice: Koolaid[];
}

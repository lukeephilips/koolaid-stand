import { Component, Input } from '@angular/core';
import { Koolaid } from './koolaid';



@Component({
  selector: 'juices',
  templateUrl: './app/juices.component.html'

})

export class JuicesComponent{
  @Input() freshjuice: Koolaid[];
}

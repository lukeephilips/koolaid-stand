import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';

@Component({
  selector: 'filter-juice',
  templateUrl: './app/filter-juice.component.html'
})

export class FilterJuiceComponent{
  @Output() filterSender = new EventEmitter();
  sendFilter(ingredient){
    this.filterSender.emit(ingredient);

  }
}

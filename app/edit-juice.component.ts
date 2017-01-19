import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Koolaid } from './koolaid';

@Component({
  selector: 'edit-juice',
  templateUrl: './app/edit-juice.component.html'

})

export class EditJuiceComponent{
  @Input() childSelectedKeg: Koolaid;

  hideEdit() {
    this.childSelectedKeg = null;
  }
}

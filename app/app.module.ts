import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { FilterPipe } from './filter.pipe';
import { EditJuiceComponent } from './edit-juice.component';
import { NewJuiceComponent } from './new-juice.component';
import { FilterJuiceComponent } from './filter-juice.component';
import { PurchaseComponent } from './purchase.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
 ],
  declarations: [ AppComponent, FilterPipe, EditJuiceComponent, NewJuiceComponent, FilterJuiceComponent, PurchaseComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

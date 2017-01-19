import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { FilterPipe } from './filter.pipe';
import { EditJuiceComponent } from './edit-juice.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
 ],
  declarations: [ AppComponent, FilterPipe, EditJuiceComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

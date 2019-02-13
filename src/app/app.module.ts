import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

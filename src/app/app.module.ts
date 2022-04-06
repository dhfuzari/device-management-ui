import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [AppComponent, CategoriesComponent, DevicesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

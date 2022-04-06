import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

@NgModule({
  declarations: [AppComponent, CategoriesComponent, DevicesComponent, CategoryDetailComponent, DeviceDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

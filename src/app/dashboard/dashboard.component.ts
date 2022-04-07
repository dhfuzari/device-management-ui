import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { Category } from '../category';
import { DevicesService } from '../devices.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  devices: Device[] = [];
  categories: Category[] = [];

  constructor(
    private deviceService: DevicesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getDevices();
    this.getCategories();
  }

  getDevices(): void {
    this.deviceService
      .getDevices()
      .subscribe((devices) => (this.devices = devices.slice(1, 5)));
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories.slice(1, 5)));
  }
}

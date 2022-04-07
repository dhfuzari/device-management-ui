import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devicesList: Device[] = [];
  categoriesList: Category[] = [];

  displayedColumns: string[] = [
    'id',
    'partNumber',
    'color',
    'categories_id',
    'actions',
  ];
  dataSource = this.devicesList;

  constructor(
    private devicesService: DevicesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getDevices();
    this.getCategories();
  }

  getDevices(): void {
    this.devicesService
      .getDevices()
      .subscribe((devices) => (this.devicesList = devices.data));
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categoriesList = categories.data));
  }

  addDevice(partNumber: string, color: string, categories_id: string): void {
    color = color.trim();
    if (!partNumber) {
      return;
    }
    this.devicesService
      .addDevice({
        color,
        partNumber: Number(partNumber),
        categories_id: Number(categories_id),
      } as Device)
      .subscribe((device) => {
        this.devicesList.push(device.data);
      });
  }

  deleteDevice(device: Device): void {
    this.devicesList = this.devicesList.filter((d) => d !== device);
    this.devicesService.deleteDevice(device.id).subscribe();
  }
}

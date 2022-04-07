import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DevicesService } from '../devices.service';
import { CategoriesService } from '../categories.service';
import { Device } from '../device';
import { Category } from '../category';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  device: Device | undefined;
  categoriesList: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private devicesService: DevicesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getDevice();
  }

  goBack(): void {
    this.location.back();
  }

  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.devicesService.getDevice(id).subscribe((device) => {
      const { data } = device;
      this.device = data;
    });
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categoriesList = categories.data));
  }

  saveDevice(): void {
    if (this.device) {
      this.devicesService
        .updateDevice(this.device)
        .subscribe(() => this.goBack());
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devicesList: Device[] = [];

  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.devicesService
      .getDevices()
      .subscribe((devices) => (this.devicesList = devices.data));
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
}

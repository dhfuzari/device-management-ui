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
      .subscribe((devices) => (this.devicesList = devices));
  }
}

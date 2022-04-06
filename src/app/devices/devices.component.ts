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
  selectedDevice?: Device;

  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  onSelectDevice(device: Device): void {
    this.selectedDevice = device;
  }

  getDevices(): void {
    this.devicesList = this.devicesService.getDevices();
  }
}

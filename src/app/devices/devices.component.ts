import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DEVICES } from '../__mocks__/mock-devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devicesList = DEVICES;
  selectedDevice?: Device;

  constructor() {}

  onSelectDevice(device: Device): void {
    this.selectedDevice = device;
  }

  ngOnInit(): void {}
}

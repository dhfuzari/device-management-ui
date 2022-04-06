import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './__mocks__/mock-devices';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor() {}

  getDevices(): Device[] {
    return DEVICES;
  }
}

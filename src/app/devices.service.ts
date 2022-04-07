import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from './device';
import { DEVICES } from './__mocks__/mock-devices';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor() {}

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }

  getDevice(id: number): Observable<Device> {
    const device = DEVICES.find((device) => device.id === id)!;
    return of(device);
  }
}

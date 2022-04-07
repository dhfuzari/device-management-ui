import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from './device';
import { DEVICES } from './__mocks__/mock-devices';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private devicesResourceURL = `${environment.apiURL}/devices`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getDevices(): Observable<{ data: Device[] }> {
    return this.http.get<{ data: Device[] }>(this.devicesResourceURL);
  }

  getDevice(id: number): Observable<{ data: Device }> {
    return this.http.get<{ data: Device }>(`${this.devicesResourceURL}/${id}`);
  }

  updateDevice(device: Device): Observable<any> {
    const { id, partNumber, color, categories_id } = device;
    return this.http.patch(
      `${this.devicesResourceURL}/${id}`,
      { color, partNumber, categories_id },
      this.httpOptions
    );
  }
}

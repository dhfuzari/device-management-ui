import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DevicesService } from '../devices.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  device: Device | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private devicesService: DevicesService
  ) {}

  ngOnInit(): void {
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
}

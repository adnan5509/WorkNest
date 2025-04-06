import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const serverAvailabiltyPercent = Math.random() * 100;

      if (serverAvailabiltyPercent > 50) {
        this.currentStatus = 'online';
      } else if (serverAvailabiltyPercent > 20) {
        this.currentStatus = 'unknown';
      } else {
        this.currentStatus = 'offline';
      }
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
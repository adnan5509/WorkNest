import { Component, DestroyRef, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  constructor(private destroyRef: DestroyRef) {

    effect(() => {
      console.log(this.currentStatus())
    });
  }

  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  ngOnInit() {
    const interval = setInterval(() => {
      const serverAvailabiltyPercent = Math.random() * 100;

      if (serverAvailabiltyPercent > 50) {
        this.currentStatus.set('online');
      } else if (serverAvailabiltyPercent > 20) {
        this.currentStatus.set('unknown');
      } else {
        this.currentStatus.set('offline');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }
}
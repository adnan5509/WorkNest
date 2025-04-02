import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServerStatusComponent } from "./components/dashboard/server-status/server-status.component";
import { TrafficComponent } from "./components/dashboard/traffic/traffic.component";
import { SupportTicketsComponent } from "./components/dashboard/support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
})
export class AppComponent {

}

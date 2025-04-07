import { Component } from '@angular/core';
import { NewTicketComponent } from "../../tickets/new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onNewTicketCreated($event: Ticket) {
    this.tickets.push($event);
  }

}

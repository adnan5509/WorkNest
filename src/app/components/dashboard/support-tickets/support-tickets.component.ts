import { Component } from '@angular/core';
import { NewTicketComponent } from "../../tickets/new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { v4 as uuidv4 } from 'uuid';
import { TicketComponent } from "./ticket/ticket.component";


@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

  tickets: Ticket[] = [];

  onNewTicketCreated($event: { ticketTitle: string, requestText: string }) {
    this.tickets.push({
      id: uuidv4(),
      ticketTitle: $event.ticketTitle,
      requestText: $event.requestText,
      status: 'open'
    });
  }

  onCompleteTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          status: 'closed'
        }
      }
      return ticket;
    });
  }

}


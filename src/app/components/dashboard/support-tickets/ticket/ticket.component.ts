import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  @Input({ required: true }) ticket!: Ticket;
  @Output() completeTicket = new EventEmitter();

  isTicketDetailsVisible = false;

  toggleTicketDetails() {
    this.isTicketDetailsVisible = !this.isTicketDetailsVisible;
  }

  onMarkTicketAsComplete() {
    this.completeTicket.emit();
  }

}
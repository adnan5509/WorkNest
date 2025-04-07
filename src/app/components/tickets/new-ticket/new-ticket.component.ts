import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  @ViewChild('newTicketForm') form?: ElementRef

  submitTicket(ticketTitle: string, requestText: string) {
    console.log('Ticket Title:', ticketTitle);
    console.log('Request Text:', requestText);

    this.form?.nativeElement.reset();
  }

}

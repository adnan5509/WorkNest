import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('newTicketForm') form?: ElementRef

  ngOnInit() {
    console.log("New Ticket OnInit called");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log("New Ticket AfterViewInit called");
    console.log(this.form?.nativeElement);
  }

  submitTicket(ticketTitle: string, requestText: string) {
    console.log('Ticket Title:', ticketTitle);
    console.log('Request Text:', requestText);

    this.form?.nativeElement.reset();
  }

}

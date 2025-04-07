export interface Ticket {
    id: string;
    ticketTitle: string;
    requestText: string;
    status: 'open' | 'closed';
}
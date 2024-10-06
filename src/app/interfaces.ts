export interface IClient {
  username: string;
  password: string;
}

export interface IConcertPoster {
  id: number;
  eventName: string;
  description: string;
  date: string;
  location: string;
  artists: string;
  ticketPrice: string;
  availableTickets: string;
  eventType: string;
  organizer: string;
  mediaFiles: FileList | null;
}

export interface IConcertPosterFormErrors {
  eventName?: string;
  description?: string;
  date?: string;
  location?: string;
  artists?: string;
  ticketPrice?: string;
  availableTickets?: string;
  eventType?: string;
  organizer?: string;
  mediaFiles?: string;
}

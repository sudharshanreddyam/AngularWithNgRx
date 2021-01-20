export interface ICourse {
  id?: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  authors: string[];
  topRated?: boolean;
}

export class Course implements ICourse {
  id?: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  authors: string[];
  topRated?: boolean;


  constructor ( id: string, title: string, creationDate: Date, duration: number, description: string, authors: string[], topRated?: boolean ) {
    this.creationDate = creationDate;
    this.description = description;
    this.duration = duration;
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.topRated = topRated;
  }
}

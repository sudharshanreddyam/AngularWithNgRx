export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: IAuthor;
  isTopRated?: boolean;
}

export interface IAuthor {
  id: number;
  name: string;
}

export class Course implements ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: IAuthor;
  isTopRated?: boolean;


  constructor ( id: number, name: string, date: string, length: number, description: string, authors: IAuthor, isTopRated?: boolean ) {
    this.date = date;
    this.description = description;
    this.length = length;
    this.id = id;
    this.name = name;
    this.authors = authors;
    this.isTopRated = isTopRated;
  }
}

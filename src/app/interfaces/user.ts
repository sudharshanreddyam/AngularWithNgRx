export interface IUser {
  id?: number;
  token?: string;
  name?: {
    first: string;
    last: string;
  },
  login: string;
  password: string;
}

export class User implements IUser {
  id?: number;
  token?: string;
  name?: {
    first: string;
    last: string;
  };
  login: string;
  password: string;


  constructor ( id: number, firstName: string, lastName: string, login: string, password: string ) {
    this.id = id;
    this.name.first = firstName;
    this.name.last = lastName;
    this.login = login;
    this.password = password;
  }
}

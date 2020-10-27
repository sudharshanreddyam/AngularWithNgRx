import { IUser } from './i-user';

export class User implements IUser{
    id: number;
    firstName: string;
    lastName: string;

    getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

import { IUser } from './IUser';

export class User implements IUser {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
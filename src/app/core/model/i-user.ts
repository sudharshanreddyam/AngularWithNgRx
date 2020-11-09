export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  getFullName(): string;
}

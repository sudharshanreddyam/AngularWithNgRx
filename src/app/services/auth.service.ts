import { Injectable } from '@angular/core';
import { User } from './../interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private mockUsers: User[] = [
    new User('1', 'Sudharshan', 'Reddyam', 'SR@gmail.com', '123456')
  ];

  login(userData: User): boolean {
    const currentUser: User[] = this.mockUsers.filter((user: User) => {
      return user.email === userData.email
        && user.password === userData.password;
    });

    if (currentUser.length) {
      localStorage.setItem('userInfo', JSON.stringify(currentUser[0]));
      this.setToken('SECRET_TOKEN');
      return true;
    }

    return false;
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  };

  getUserInfo(): string {
    if (this.isAuthenticated()) {
      const currentUser: User = JSON.parse(localStorage.getItem('userInfo'));
      return `${currentUser.firstName} ${currentUser.lastName}`;
    } else {
      this.logout();
    }
  }

  get token(): string | null {
    const expireDate: Date = new Date(localStorage.getItem('expireDate'));

    if (expireDate > new Date()) {
      return localStorage.getItem('token');
    } else {
      this.logout();
      return null;
    }
  }

  setToken(value: string | null): void {
    if (value) {
      const expireDate: Date = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('token', value);
      localStorage.setItem('expireDate', expireDate.toString());
    } else {
      localStorage.clear();
    }
  }

}

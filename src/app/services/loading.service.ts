import { Injectable } from '@angular/core';

@Injectable( { providedIn: 'root' } )
export class LoadingService {

  private loading: boolean = false;

  constructor () { }

  loadingOn(): void {
    this.loading = true;
  }

  loadingOff(): void {
    this.loading = false;
  }

  get isLoading() {
    return this.loading;
  }
}

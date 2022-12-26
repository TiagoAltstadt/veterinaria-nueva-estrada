import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingScreenService {
  private loading: boolean = false;

  constructor() {}

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}

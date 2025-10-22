import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private filterValue$ = new BehaviorSubject<any>(''); // colocar $ no final para saber que é um observable

  constructor() { }

  getValue(value: any) {
    this.filterValue$.next(value);
  }

  setValue(): Observable<any> {
    return this.filterValue$.asObservable();
  }

  onPageReload(): void {
    localStorage.clear();
  }
}

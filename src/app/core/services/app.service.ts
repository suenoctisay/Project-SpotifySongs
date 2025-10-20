import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private filterSongs$ = new BehaviorSubject<any>(''); // colocar $ no final para saber que é um observable

  constructor() { }

  getSongs(value: any) {
    this.filterSongs$.next(value);
  }

  setSongs(): Observable<any> {
    return this.filterSongs$.asObservable();
  }


}

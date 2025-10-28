import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private filterValue$ = new BehaviorSubject<any>(''); // colocar $ no final para saber que é um observable
  searchTerm$ = this.filterValue$.asObservable();

  constructor() { }

  getValue(value: any) {
    this.filterValue$.next(value);
  }

  setValue(): Observable<any> {
    return this.searchTerm$;
  }

}

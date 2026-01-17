import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Playlist } from '../../playlist/interface/playlist.interface';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private filter$ = new BehaviorSubject<any>('');
  searchTerm$ = this.filter$.asObservable();

  constructor() { }

  // FILTER FUNCTION
  setValue(value: any) {
    this.filter$.next(value);
  }
  getValue(): Observable<any> {
    return this.searchTerm$;
  }

}

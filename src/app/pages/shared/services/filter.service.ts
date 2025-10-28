import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Playlist } from '../../playlist/interface/playlist.interface';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private filterSongs$ = new BehaviorSubject<any>('');
  searchTerm$ = this.filterSongs$.asObservable();

  constructor() { }

  // FILTER FUNCTION
  setValue(value: any) {
    this.filterSongs$.next(value);
  }
  getValue(): Observable<any> {
    return this.searchTerm$;
  }

}

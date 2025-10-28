import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Playlist } from '../../playlist/interface/playlist.interface';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private filterSongs$ = new BehaviorSubject<any>(''); // colocar $ no final para saber que é um observable
  searchTerm$ = this.filterSongs$.asObservable();

  // private filterPlaylists$ = new BehaviorSubject<Partial<Playlist>>({});

  constructor() { }

  // SONGS FILTER
  setValueSong(value: any) {
    this.filterSongs$.next(value);
  }
  getValueSong(): Observable<any> {
    return this.searchTerm$;
  }

  // PLAYLIST FILTER
  // setValuePlaylist(playlist: Partial<Playlist>): void {
  //   this.filterPlaylists$.next(playlist);
  // }
  // getValuePlaylist(): Observable<Partial<Playlist>> {
  //   return this.filterPlaylists$.asObservable();
  // }
}

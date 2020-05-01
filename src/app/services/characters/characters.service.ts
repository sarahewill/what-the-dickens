import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { MessageService } from '../messages/messages.service';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private messageService: MessageService) {}

  getCharacters(): Observable<Character[]> {
    this.messageService.add('HeroService: fetched heroes');

    return of(CHARACTERS);
  }
}

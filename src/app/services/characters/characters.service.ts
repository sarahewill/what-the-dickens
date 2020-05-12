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

  getCharacter(id: string): Observable<Character> {
    this.messageService.add(`Hero service fetched; fetched hero id: ${id}`);
    return of(CHARACTERS.find((char) => char.id === id));
  }
}

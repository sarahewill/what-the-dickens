import { Component, OnInit } from '@angular/core';
import { Character } from '../../../services/characters/character';
import { CharactersService } from '../../../services/characters/characters.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  filteredCharacters: Observable<Character[]>;
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.filteredCharacters = new Observable();
    this.getCharacters();
    this.myForm = this.fb.group({
      myInput: null,
    });
    this.filteredCharacters = this.myForm.get('myInput').valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  getRelatedCharacters(char: Character): Character[] {
    const lastName = char.last;
    return this.characters.filter((character) => (character.last = lastName));
  }

  getCharacters(): void {
    this.charactersService.getCharacters().subscribe((characters) => (this.characters = characters));
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.characters?.filter((char) =>
      (char.first.toLowerCase() + char.last.toLowerCase()).includes(filterValue)
    );
  }
}

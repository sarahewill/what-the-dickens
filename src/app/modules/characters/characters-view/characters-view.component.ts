import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters/characters.service';
import { Character } from '../../../services/characters/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss'],
})
export class CharactersViewComponent implements OnInit {
  character: Character;
  constructor(private route: ActivatedRoute, private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.route.params.subscribe((route) => {
      this.charactersService.getCharacter(route.id).subscribe((char) => (this.character = char));
    });
  }
}

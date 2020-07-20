import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../services/characters/characters.service';
import { Character } from '../../services/characters/character';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.scss'],
})
export class WalkComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}
  zoom = 12;
  assignedCharacter: Character;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers = [];

  ngOnInit() {
    this.center = {
      lat: 51.512732,
      lng: -0.111999,
    };
    if (this.center) {
      this.addMarker();
    }
    this.getRandomCharacter();
  }

  addMarker() {
    // todo: get users location instead of random London location based on center
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'black',
        text: 'Your Location',
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    });
  }

  getRandomCharacter(): void {
    this.charactersService.getCharacters().subscribe((characters) => {
      this.assignedCharacter = characters[Math.floor(Math.random() * characters.length)];
    });
  }
}

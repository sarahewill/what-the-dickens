import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../services/characters/characters.service';
import { Character } from '../../services/characters/character';

export interface Walk {
  startLocation: Location;
  endLocation: Location;
  character: Character;
}
export interface Location {
  lat: number;
  lng: number;
}
export interface Filter {
  name: string;
  value: number;
}
@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.scss'],
})
export class WalkComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}
  zoom = 12;
  assignedCharacter: Character;
  usersLocation: Location;
  endLocation: Location;
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
  walk: Walk;
  filters: Filter[] = [
    {
      name: 'short',
      value: 0.15,
    },
    {
      name: 'med',
      value: 0.25,
    },
    {
      name: 'long',
      value: 0.33,
    },
  ];
  filter = 0.15;

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
    // todo: get users actual location
    this.markers.push(
      {
        position: {
          lat: 51.51273,
          lng: -0.111999,
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
      },
      {
        position: this.getRandomLatLong(),
        label: {
          color: 'black',
          text: 'Your Destination',
        },
        title: 'Marker title ' + (this.markers.length + 1),
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.DROP,
        },
      }
    );
  }

  getRandomLatLong(): Location {
    const location = {
      lat: this.center.lat + ((Math.random() * (-0.05 - 0.33) + 0.33 - this.filter) * 1.5) / 10,
      lng: this.center.lng + ((Math.random() * (-0.05 - 0.33) + 0.33 - this.filter) * 1.5) / 10,
    };
    this.usersLocation = location;
    return location;
  }

  getRandomCharacter(): void {
    this.charactersService.getCharacters().subscribe((characters) => {
      this.assignedCharacter = characters[Math.floor(Math.random() * characters.length)];
    });
  }

  startWalk() {
    this.walk = {
      startLocation: this.usersLocation,
      endLocation: this.endLocation,
      character: this.assignedCharacter,
    };
    console.log('add start walk service here', this.walk);
  }

  updateRoute() {
    if (this.usersLocation) {
      this.markers = [];
      this.addMarker();
    }
  }
}

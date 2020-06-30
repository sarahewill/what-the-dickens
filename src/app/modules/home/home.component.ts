import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../../services/apixu/apixu.service';
import { Weatherstack } from '../../services/apixu/weatherstack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apixuService: ApixuService) {}
  weatherInLondon: Weatherstack;
  isDay: boolean;

  ngOnInit(): void {
    this.sendToAPIXU();
  }

  sendToAPIXU() {
    this.apixuService.getWeather().subscribe((data: Weatherstack) => {
      this.weatherInLondon = data;
      if (this.weatherInLondon.current.is_day === 'no') {
        this.isDay = false;
      } else {
        this.isDay = true;
      }
    });
  }
}

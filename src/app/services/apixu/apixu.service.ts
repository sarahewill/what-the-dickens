import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config/config';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get('http://api.weatherstack.com/current?access_key=' + config.MY_KEY + '&query=London');
  }
}

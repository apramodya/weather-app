import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class WeatherProvider {
  apiKey = '34434da02b9d2c06f7194ac16cd8c4f0';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://samples.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city) {
    return this.http.get(this.url + city + '&appid=' + this.apiKey).map(data => {
      data
    });
  }
}

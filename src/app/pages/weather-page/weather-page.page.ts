import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.page.html',
  styleUrls: ['./weather-page.page.scss'],
})
export class WeatherPagePage implements OnInit {
  public weatherData: any;
  public temp: string = "00";  
  public city: string = "null";
  public weatherCondition: string ="N/A";
  public weatherIcon: string ="N/A";
  public windSpeed: string = "00";
  public humidity: string = "00";
  public timezone:  string = "00";
  public visibility;
  public pressure: string = "00";
  public clouds: string = "00";
  public sunset: any;
  public sunrise: any;
  public forcastWeather: any;

  sliderConfig = {
    spaceBetween: 0,
    slidesPreview: 1
  }

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.getWeather().subscribe(
      (data: any) => {
        console.log("weather", data);
        var temp = data.main.temp;
        this.temp = temp.toString().slice(0, 2);
        this.city = data.name;
        this.weatherCondition = data.weather[0].main;
        this.weatherIcon = data.weather[0].icon;
        console.log(this.weatherCondition, data.weather[0].icon);
        
        this.windSpeed = data.wind.speed;
        this.humidity  = data.main.humidity;
        this.pressure  = data.main.pressure;
        this.timezone  = data.timezone;
        this.visibility = data.visibility/1000;
        this.clouds = data.clouds.all;
        this.sunset = data.sys.sunset;
        this.sunrise = data.sys.sunrise;
  });
  this.sharedService.getForcastWeather().subscribe(
    (data: any)=>{
      this.forcastWeather = data.hourly;
      console.log(data);
      
    }
  )
}

}

import { WeatherService, WEATHER_API_KEY, WEATHER_URL } from './getweather.service';

export const WeatherAPIInjectables: Array<any> = [
    {provide: WeatherService, useClass: WeatherService},
    {provide: WEATHER_API_KEY, useValue: WEATHER_API_KEY},
    {provide: WEATHER_URL, useValue: WEATHER_URL}
];

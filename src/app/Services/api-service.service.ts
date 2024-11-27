import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { WeatherForecast } from '../Model/WeatherForecast';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = environment.apiUrl + '/WeatherForecast';

  constructor(private httpClient: HttpClient) {}

  public GetWeatherData(): Observable<WeatherForecast[]> {
    return this.httpClient.get<WeatherForecast[]>(`${this.apiUrl}`).pipe(
      map((data: any[]) => {
        console.log(data);
        return data;
      })
    );
  }
}

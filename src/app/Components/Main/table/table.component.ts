import { Component } from '@angular/core';
import bootstrap from '../../../../main.server';
import { ApiServiceService } from '../../../Services/api-service.service';
import { OnInit } from '@angular/core';
import { WeatherForecast } from '../../../Model/WeatherForecast';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  public weatherforecasts: WeatherForecast[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.GetWeatherData().subscribe((data: WeatherForecast[]) => {
      this.weatherforecasts = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  stops;

  constructor(public stopsService:StopsService) {
  }

  async searchTimes(stop){
    const data = await this.stopsService.getTimes(stop);
    console.log(data);
    this.stops=data;
  }


  ngOnInit(): void {
  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  getTimes(stop){
    const requestURL = `https://jsonp.afeld.me/?callback=&url=http://urbanos.guadalajara.es:8080/SSIIMovilWS/ws/cons/tiemposParada.json?idParada=${stop}`;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
    return new Promise((resolve)=>{
      request.onload = () => {
          const jsonObject = request.response;
          resolve (jsonObject);
      }

    })
  }



  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

baseUrl = 'https://localhost:7079/';


  constructor(private http: HttpClient) { }

  login(model: any){

    return this.http.get(this.baseUrl+"WeatherForecast?UserName="+model.username+"&Apellido="+model.password+"")
  }

}
 
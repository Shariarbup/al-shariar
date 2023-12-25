import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../model/Education';


@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient){}
  
  getEducationData(){
    return this.http.get<Education[]>("assets/json/education.json");
  }
}

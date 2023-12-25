import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../model/Education';
import { Skill } from '../model/Skill';
import { Project } from '../model/Project';


@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient){}
  
  getEducationData(){
    return this.http.get<Education[]>("assets/json/education.json");
  }

  getSkillData(){
    return this.http.get<Skill[]>("assets/json/skill.json");
  }

  getProjectData(){
    return this.http.get<Project[]>("assets/json/project.json");
  }
}

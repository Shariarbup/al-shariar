import { Component } from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  public skills: Skill[] = [];

  constructor(private portfolioService: PortfolioServiceService) {
    this.portfolioService.getSkillData().subscribe((res: Skill[])=>{
        this.skills = res;
    })
  }

}

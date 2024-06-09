import { Component } from '@angular/core';
import { Education } from 'src/app/model/Education';
import { Work } from 'src/app/model/Work';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  works: Work[] = [];

  educations: Education[] = [];

  constructor(private portfolioservice: PortfolioServiceService) {
    this.portfolioservice.getWorkExperienceData().subscribe((res:Work[]) =>{
        this.works = res;        
    })
    this.portfolioservice.getEducationData().subscribe((res:Education[]) =>{
      this.educations = res;
      console.log("🚀 ~ file: education.component.ts:17 ~ EducationComponent ~ this.porrtfolioservice.getEducationData ~ this.educations:", this.educations)
      
  })
  }

}

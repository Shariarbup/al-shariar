import { Component } from '@angular/core';
import { Work } from 'src/app/model/Work';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  works: Work[] = [];

  constructor(private portfolioservice: PortfolioServiceService) {
    this.portfolioservice.getWorkExperienceData().subscribe((res:Work[]) =>{
        this.works = res;        
    })
  }

}

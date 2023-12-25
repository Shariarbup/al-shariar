import { Component } from '@angular/core';
import { Education } from 'src/app/model/Education';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educations: Education[] = [];

  constructor(private porrtfolioservice: PortfolioServiceService) {
    this.porrtfolioservice.getEducationData().subscribe((res:Education[]) =>{
        this.educations = res;
        console.log("🚀 ~ file: education.component.ts:17 ~ EducationComponent ~ this.porrtfolioservice.getEducationData ~ this.educations:", this.educations)
        
    })
  }

}

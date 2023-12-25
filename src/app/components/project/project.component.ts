import { Component } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  public projects: Project[] = [];

  constructor(private portfolioService: PortfolioServiceService) {
    this.portfolioService.getProjectData().subscribe((res: Project[])=>{
        this.projects = res;
    })
  }

}

import {Component, OnInit} from '@angular/core';
import { Project } from 'src/app/model/Project';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];
  public filteredProjects: Project[] = []; // Initialize as an empty array
  activeFilter: string = 'All';

  constructor(private portfolioService: PortfolioServiceService) {}

  ngOnInit(): void {
    // Fetch project data and initialize filteredProjects
    this.portfolioService.getProjectData().subscribe((res: Project[]) => {
      this.projects = res;
      this.filteredProjects = [...this.projects]; // Set filteredProjects after data is fetched
    });
  }

  filterProjects(filter: string): void {
    this.activeFilter = filter;
    this.filteredProjects = this.projects.filter(
      project => filter === 'All' || project.category === filter
    );
  }

}

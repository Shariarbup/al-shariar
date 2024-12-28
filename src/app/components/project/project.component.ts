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
  // public projects: Project[] = [];

  constructor(private portfolioService: PortfolioServiceService) {
    // this.portfolioService.getProjectData().subscribe((res: Project[])=>{
    //     this.projects = res;
    // })
  }

  activeFilter: string = 'All';
  projects = [
    {
      title: 'Java Project',
      description: 'This project was built using Java, demonstrating solid back-end skills.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'java',
      viewUrl: 'project-url',
      githubUrl: 'https://github.com/username/java-project',
    },
    {
      title: 'Angular Project',
      description: 'This is a front-end application built with Angular.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'angular',
      viewUrl: 'project-url',
      githubUrl: 'https://github.com/username/angular-project',
    },
    {
      title: 'Python Project',
      description: 'A data science project built using Python and machine learning libraries.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'python',
      viewUrl: 'project-url',
      githubUrl: 'https://github.com/username/python-project',
    },
    {
      title: 'React Project',
      description: 'A modern web app built with React.js.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'react',
      viewUrl: 'project-url',
      githubUrl: 'https://github.com/username/react-project',
    },
    {
      title: 'HTML/CSS/JS Project',
      description: 'A responsive website built with HTML, CSS, and JavaScript.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'html',
      viewUrl: 'project-url',
      githubUrl: 'https://github.com/username/html-project',
    },
  ];

  filteredProjects = [...this.projects];

  ngOnInit(): void {}

  filterProjects(filter: string): void {
    this.activeFilter = filter;
    this.filteredProjects = this.projects.filter(
      project => filter === 'All' || project.category === filter
    );
  }

}

import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/model/Education';
import { Work } from 'src/app/model/Work';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  works: Work[] = [];

  educations: Education[] = [];

  constructor(private portfolioservice: PortfolioServiceService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    this.portfolioservice.getWorkExperienceData().subscribe((res: Work[]) => {
      this.works = res;
    })
    this.portfolioservice.getEducationData().subscribe((res: Education[]) => {
      this.educations = res;
    })
  }

  ngOnInit(): void {
    // Listen for the fragment
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }



}

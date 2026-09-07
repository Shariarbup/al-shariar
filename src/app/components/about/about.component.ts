import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Education } from 'src/app/model/Education';
import { Work } from 'src/app/model/Work';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';
import * as AOS from 'aos';
import { Recommendation } from 'src/app/model/Recommendation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  works: Work[] = [];

  educations: Education[] = [];

  recommendations: Recommendation[] = [];

  //workplace memory code
  selectedWork: any = null;
  selectedImage: string | null = null;
  currentImageIndex: number = 0;

  //Recommendation

  showRecommendationsModal = false;

  selectedRecommendationImage: string | null = null;

  recommendationIndex = 0;

  openFullImage(image: string): void {
    this.selectedImage = image;
  }

  closeFullImage(): void {
    this.selectedImage = null;
  }

  constructor(private portfolioservice: PortfolioServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.portfolioservice.getWorkExperienceData().subscribe((res: Work[]) => {
      this.works = res;
    })
    this.portfolioservice.getEducationData().subscribe((res: Education[]) => {
      this.educations = res;
    })
    this.portfolioservice.getRecommendationData().subscribe((res: Recommendation[]) => {
      this.recommendations = res;
      console.log("🚀 ~ AboutComponent ~ constructor ~ this.recommendations :", this.recommendations )
    })
  }

  ngOnInit(): void {
    // Listen for the fragment
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      // Offset (in px) from the original trigger point
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh(); // Reinitialize AOS on route change
      }
    });
  }


  // workplace memory code
  openWorkplaceMemory(work: any): void {
    this.selectedWork = work;
  }

  closeWorkplaceMemory(): void {
    this.selectedWork = null;
  }

  showWorkplaceImage(image: string): void {
    this.selectedImage = image;
    this.currentImageIndex = this.selectedWork.photos.indexOf(image);
  }

  hideWorkplaceImage(): void {
    this.selectedImage = null;
  }

  nextWorkplaceImage(): void {
    if (!this.selectedWork?.photos?.length) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.selectedWork.photos.length;

    this.selectedImage =
      this.selectedWork.photos[this.currentImageIndex];
  }

  previousWorkplaceImage(): void {
    if (!this.selectedWork?.photos?.length) {
      return;
    }

    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.selectedWork.photos.length) %
      this.selectedWork.photos.length;

    this.selectedImage =
      this.selectedWork.photos[this.currentImageIndex];
  }

  // Recommendation Code
  openRecommendationsModal(): void {
    this.showRecommendationsModal = true;
  }

  closeRecommendationsModal(): void {
    this.showRecommendationsModal = false;
  }

  showRecommendationImage(image: string): void {

    this.selectedRecommendationImage = image;

    this.recommendationIndex =
      this.recommendations.findIndex(
        recommendation => recommendation.image === image
      );
  }
  hideRecommendationImage(): void {
    this.selectedRecommendationImage = null;
  }
  nextRecommendation(): void {

    this.recommendationIndex =
      (this.recommendationIndex + 1) %
      this.recommendations.length;

    this.selectedRecommendationImage =
      this.recommendations[this.recommendationIndex].image;
  }
  previousRecommendation(): void {

    this.recommendationIndex =
      (this.recommendationIndex - 1 +
        this.recommendations.length) %
      this.recommendations.length;

    this.selectedRecommendationImage =
      this.recommendations[this.recommendationIndex].image;
  }
}

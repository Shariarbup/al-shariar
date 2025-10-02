import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { Certificate } from 'src/app/model/Certificate';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';
declare var bootstrap: any;
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})

export class CertificateComponent implements OnInit{
  activeFilter: string = 'All';
  selectedImage: string | null = null;
  currentIndex: number = 0;
  
  public certificates: Certificate[] = [];
  public filteredCertificates: Certificate[] = []; 
  
  constructor(private portfolioService: PortfolioServiceService) {}
  
  ngOnInit(): void {
    this.portfolioService.getCertificateData().subscribe((res: Certificate[]) => {
      this.certificates = res;
      this.filteredCertificates = [...this.certificates];
    });
  }
  
  filterCertificates(filter: string): void {
    this.activeFilter = filter;
    this.filteredCertificates = this.certificates.filter(
      certificate => filter === 'All' || certificate.category === filter
    );
  }
  
  viewFullImage(imageUrl: string, index: number): void {
    this.selectedImage = imageUrl;
    this.currentIndex = index;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
  
  // Navigate to next image
  nextImage(): void {
    if (!this.filteredCertificates.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredCertificates.length;
    this.selectedImage = this.filteredCertificates[this.currentIndex].image;
  }
  
  // Navigate to previous image
  prevImage(): void {
    if (!this.filteredCertificates.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.filteredCertificates.length) % this.filteredCertificates.length;
    this.selectedImage = this.filteredCertificates[this.currentIndex].image;
  }

  closeModal(): void {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
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

export class CertificateComponent implements OnInit {
  activeFilter: string = 'All';
  selectedImage: string | null = null;
  currentIndex: number = 0;
  searchText: string = '';

  public certificates: Certificate[] = [];
  public filteredCertificates: Certificate[] = [];

  constructor(private portfolioService: PortfolioServiceService) { }

  ngOnInit(): void {
    this.portfolioService.getCertificateData().subscribe((res: Certificate[]) => {
      this.certificates = res;
      this.filteredCertificates = [...this.certificates];
    });
  }

  // Filter by category
  filterCertificates(filter: string): void {
    this.activeFilter = filter;
    this.applyFilters();
  }

  // Search by title
  searchCertificates(): void {
    this.applyFilters();
  }

  // Apply both category filter and search
  private applyFilters(): void {
    this.filteredCertificates = this.certificates.filter(cert => {
      const matchesCategory = this.activeFilter === 'All' || cert.category === this.activeFilter;
      const matchesSearch = cert.title.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // View full image
  viewFullImage(imageUrl: string, index: number): void {
    this.selectedImage = imageUrl;
    this.currentIndex = index;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }

  // Navigate
  nextImage(): void {
    if (!this.filteredCertificates.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredCertificates.length;
    this.selectedImage = this.filteredCertificates[this.currentIndex].image;
  }

  prevImage(): void {
    if (!this.filteredCertificates.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.filteredCertificates.length) % this.filteredCertificates.length;
    this.selectedImage = this.filteredCertificates[this.currentIndex].image;
  }

}

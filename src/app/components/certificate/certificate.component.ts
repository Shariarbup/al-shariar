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

  public certificates: Certificate[] = [];
  public filteredCertificates: Certificate[] = []; // Initialize as an empty array
  
  constructor(private portfolioService: PortfolioServiceService) {}

  ngOnInit(): void {
    this.portfolioService.getCertificateData().subscribe((res: Certificate[])=>{
      this.certificates = res;
      this.filteredCertificates = [...this.certificates];
  })
  }


  filterCertificates(filter: string): void {
    this.activeFilter = filter;
    this.filteredCertificates = this.certificates.filter(
      certificate => filter === 'All' || certificate.category === filter
    );
  }

  viewFullImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
}

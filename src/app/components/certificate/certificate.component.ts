import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
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

export class CertificateComponent {
  activeFilter: string = 'All';
  selectedImage: string | null = null;
  
  certificates = [
    {
      title: 'Bachelor of Science',
      description: 'Academic degree in Information and Communication Engineering.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'academic',
    },
    {
      title: 'Masterclass in Data Science',
      description: 'Certification in advanced data science techniques.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'academic',
    },
    {
      title: 'Hackathon Winner 2023',
      description: 'Winner of a prestigious hackathon competition.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'extracurricular',
    },
    {
      title: 'Leadership Workshop',
      description: 'Certificate for outstanding leadership in workshops.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'extracurricular',
    },
    {
      title: 'Web Design Excellence',
      description: 'Awarded for exceptional web design projects.',
      image: 'assets/images/profile_pic_2.jpeg',
      category: 'extracurricular',
    },
  ];

  filteredCertificates = [...this.certificates];

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

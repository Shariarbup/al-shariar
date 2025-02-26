import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import emailjs from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    user_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init({
      duration: 2000
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh(); // Reinitialize AOS on route change
      }
    });

   
  }

  sendEmail() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      emailjs.send('service_lnrq7a9', 'template_koubble', this.contactForm.value, 'TD2FakbB0iy1gZxAq')
        .then(response => {
          console.log('Email sent!', response);
          alert('Your message has been sent!');
          this.contactForm.reset();
        })
        .catch(error => {
          console.error('Error sending email', error);
          alert('Failed to send email.');
        })
        .finally(() => {
          this.isLoading = false; // Hide loading state
        });;
    }
  }


}

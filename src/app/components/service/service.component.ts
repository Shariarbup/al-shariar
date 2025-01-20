import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh(); // Reinitialize AOS on route change
      }
    });
  }
}

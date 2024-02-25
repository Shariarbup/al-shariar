import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioServiceService } from './services/portfolio-service.service';
import {HttpClientModule} from '@angular/common/http';
import { PracticeComponent } from './components/practice/practice.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTwoComponent } from './components/reactive-forms-two/reactive-forms-two.component';
import { ObservableComponent } from './components/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    NavbarComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    ProjectComponent,
    ContactComponent,
    PracticeComponent,
    FlexboxComponent,
    ReactiveFormsComponent,
    ReactiveFormsTwoComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

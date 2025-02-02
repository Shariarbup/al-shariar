import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioServiceService } from './services/portfolio-service.service';
import {HttpClientModule} from '@angular/common/http';
import { PracticeComponent } from './practice/practice/practice.component';
import { FlexboxComponent } from './practice/flexbox/flexbox.component';
import { ReactiveFormsComponent } from './practice/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTwoComponent } from './practice/reactive-forms-two/reactive-forms-two.component';
import { ObservableComponent } from './practice/observable/observable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './practice/parent/parent.component';
import { ChildComponent } from './practice/child/child.component';
import { SiblingOneComponent } from './practice/sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './practice/sibling-two/sibling-two.component';
import { SiblingContainerComponent } from './practice/sibling-container/sibling-container.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { FooterComponent } from './components/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
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
    ObservableComponent,
    ParentComponent,
    ChildComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    SiblingContainerComponent,
    CertificateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PortfolioServiceService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

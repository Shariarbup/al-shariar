import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '',component: AboutComponent},
  {path: 'about',component: AboutComponent},
  {path: 'education',component: EducationComponent},
  {path: 'skill',component: SkillComponent},
  {path: 'service',component: ServiceComponent},
  {path: 'project',component: ProjectComponent},
  {path: 'contact',component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { PracticeComponent } from './components/practice/practice.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsTwoComponent } from './components/reactive-forms-two/reactive-forms-two.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ParentComponent } from './practice/parent/parent.component';
import { SiblingOneComponent } from './practice/sibling-one/sibling-one.component';
import { SiblingContainerComponent } from './practice/sibling-container/sibling-container.component';

const routes: Routes = [
  {path: '',component: AboutComponent},
  {path: 'about',component: AboutComponent},
  {path: 'skill',component: SkillComponent},
  {path: 'service',component: ServiceComponent},
  {path: 'project',component: ProjectComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'practice',component: PracticeComponent},
  {path: 'flexBox',component: FlexboxComponent},
  {path: 'reactive-forms',component: ReactiveFormsComponent},
  {path: 'reactive-forms-two',component: ReactiveFormsTwoComponent},
  {path: 'rsjx-observable',component: ObservableComponent},
  {path: 'parent',component: ParentComponent},
  {path: 'sibling',component: SiblingContainerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

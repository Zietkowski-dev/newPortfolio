import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import {ContactComponent} from './contact/contact.component'
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/intro',
  pathMatch: 'full'
  },
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

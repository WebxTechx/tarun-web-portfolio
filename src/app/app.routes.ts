import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MaintainceComponent } from './shared/maintaince/maintaince.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ServicePageComponent } from './service-page/service-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about-me',
    component: AboutPageComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'services',
    component: ServicePageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'coming-soon',
    component: MaintainceComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

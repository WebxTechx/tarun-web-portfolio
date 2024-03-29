import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { MaintainceComponent } from './shared/maintaince/maintaince.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'The Tarun Gupta',
  },
  {
    path: 'about-me',
    component: AboutPageComponent,
    title: 'About Tarun',
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
    title: "Tarun's Portfolio",
  },
  {
    path: 'portfolio/portfolio-detail/:id',
    component: PortfolioDetailComponent,
    title: 'Portolfio',
  },
  {
    path: 'services',
    component: ServicePageComponent,
    title: 'Services',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'coming-soon',
    component: MaintainceComponent,
    title: 'Coming Soon',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.sass',
})
export class PortfolioPageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.sass',
})
export class PortfolioPageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

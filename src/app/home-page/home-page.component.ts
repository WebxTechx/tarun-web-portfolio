import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass',
})
export class HomePageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

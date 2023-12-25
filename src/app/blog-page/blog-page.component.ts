import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.sass',
})
export class BlogPageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  reload() {
    console.warn('asdasd');

    setTimeout(() => {
      window.location.reload();
    }, 10);
  }
}

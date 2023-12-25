import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.sass',
})
export class BlogPageComponent {
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

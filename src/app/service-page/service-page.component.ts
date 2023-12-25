import { Component } from '@angular/core';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.sass',
})
export class ServicePageComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

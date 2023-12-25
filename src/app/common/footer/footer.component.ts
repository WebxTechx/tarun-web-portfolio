import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
})
export class FooterComponent {
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  reload() {
    this.globalService.loading_start();
    setTimeout(() => {
      window.location.reload();
      this.globalService.loading_stop();
    }, 800);
  }
}

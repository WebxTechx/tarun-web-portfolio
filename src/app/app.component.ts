import { Component, ElementRef, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Tarun Gupta';
  showLoader: Boolean = false;
  openHeader = document.getElementsByClassName('tp-offcanvas-area');

  constructor(
    private globalService: GlobalService,
    private route: Router,
    private el: ElementRef,
  ) {
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        this.openHeader[0]?.classList.remove('opened');
        // window.location.reload
      }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar

        const url = event?.['url'].split('/');

        if (url[1] !== '') this.globalService.enableFooter = true;
        else this.globalService.enableFooter = false;
        // window.location.reload();
        window.scrollTo(0, 0);
      }

      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar

        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit(): void {
    this.globalService.get_loader_Data().subscribe((res: Boolean) => {
      this.showLoader = res;
    });

    this.globalService.loading_start();
    setTimeout(() => {
      this.globalService.loading_stop();

      this.globalService.swtich_white();
    }, 3000);
  }

  
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }
}

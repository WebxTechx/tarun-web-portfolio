import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  _themeColChange: boolean = false;
  HTMLHead = document.getElementsByClassName('no-js');

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.theme_color_switch_Data().subscribe((res: Boolean) => {
      if (res === true) {
        this._themeColChange = true;
        this.HTMLHead[0]?.setAttribute('tp-theme', 'tp-theme-light');
      } else {
        this._themeColChange = false;
        this.HTMLHead[0]?.setAttribute('tp-theme', 'tp-theme-dark');
      }
    });
  }

  changeTheme($event: any) {
    if ($event.target.checked === true) {
      this._themeColChange = true;
      this.HTMLHead[0]?.setAttribute('tp-theme', 'tp-theme-light');
    } else {
      this._themeColChange = false;
      this.HTMLHead[0]?.setAttribute('tp-theme', 'tp-theme-dark');
    }
  }
}

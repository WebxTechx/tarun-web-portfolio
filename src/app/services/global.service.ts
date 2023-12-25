import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  loader$ = new BehaviorSubject<boolean>(false);
  themeColor$ = new BehaviorSubject<boolean>(false);
  enableFooter: boolean = false;
  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  }

  async loading_start() {
    this.loader$.next(true);
  }

  async loading_stop() {
    this.loader$.next(false);
  }

  get_loader_Data() {
    return this.loader$.asObservable();
  }

  async swtich_white() {
    this.themeColor$.next(true);
  }

  async swtich_black() {
    this.themeColor$.next(false);
  }

  theme_color_switch_Data() {
    return this.themeColor$.asObservable();
  }
}

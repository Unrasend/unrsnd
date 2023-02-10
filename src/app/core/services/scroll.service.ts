import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollEl: ElementRef | null = null;

  setScrollElement(scrollEl: ElementRef): void {
    this.scrollEl = scrollEl;
  }

  disableScroll(): void {
    this.scrollEl && (this.scrollEl.nativeElement.style.overflow = 'hidden');
  }

  enableScroll(): void {
    this.scrollEl && (this.scrollEl.nativeElement.style.overflow = 'auto');
  }

  toggleScroll(enable: boolean): void {
    if (enable) {
      this.enableScroll();
    } else {
      this.disableScroll();
    }
  }
}

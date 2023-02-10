import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { isMobileDevice } from '../../shared/responsive.util';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'unr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChild('burger') readonly burger!: Readonly<ElementRef>;
  constructor (public readonly scrollService: ScrollService) {}

  onLinkClick(): void {
    if (!isMobileDevice()) {
      return;
    }
    (this.burger.nativeElement.checked = !this.burger.nativeElement.checked);
    this.scrollService.enableScroll();
  }
}

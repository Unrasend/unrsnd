import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('term') readonly term!: ElementRef;
  constructor (private readonly scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollService.setScrollElement(this.term);
  }
}

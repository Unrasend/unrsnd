import { Component } from '@angular/core';

@Component({
  selector: 'unr-header',
  template: `
    <header
      class="
      flex
      items-center
      w-full
      h-4xl
      px-md
      bg-bg-2
      justify-between
      border-bg-body
      border-b-2
      transition-all
      hover:border-alert
      hover:bg-alert
      focus-within:bg-alert
      focus-within:border-alert
    "
    >
      <a href="#" class="link after:hidden before:hidden">Name</a>
      <nav class="flex-1 flex items-center justify-center h-full">
        <ul class="flex items-center -translate-x-1/4 h-full">
          <li class="h-full">
            <a routerLink="test" class="link">Test</a>
          </li>
          <li class="h-full">
            <a href="#" class="link">Home</a>
          </li>
          <li class="h-full">
            <a href="#" class="link">Home</a>
          </li>
          <li class="h-full">
            <a href="#" class="link">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `.link {
      @apply
        flex
        items-center
        h-full
        px-xs
        mr-2xs
        rounded-xl
        transition-all
        hover:bg-bg-2
        focus:bg-bg-2;

      &:hover {
        box-shadow: 0px 0px .2rem .1rem rgba(0,0,0,0.75) inset;
      }
    }
    `
  ]
})
export class HeaderComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'unr-footer',
  template: `
    <footer
      class="
      mt-auto
      flex
      items-center
      w-full
      px-4xl
      pb-[6rem]
      pt-4xl
      bg-bg-1
      justify-between
      border-bg-body
      border-t-2
    "
    >
      <h2 class="block h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        <span class="text-f-1 text">© 2023 Copyright Unrasend. All rights reserved.</span>
      </h2>
      <div>
        <h2 class="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <ul class="flex">
          <li class="mr-xs"><a href="#">Link</a></li>
          <li class="mr-xs"><a href="#">Link</a></li>
          <li class="mr-xs"><a href="#">Link</a></li>
          <li class="mr-xs"><a href="#">Link</a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: [
    `
    `
  ]
})
export class FooterComponent {}

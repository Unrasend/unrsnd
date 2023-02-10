import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'unr-footer',
  template: `
    <footer
      class="
      mt-auto
      flex
      xs:flex-col
      items-center
      w-full
      px-4xl
      xs:px-md
      pb-[6rem]
      xs:pb-2xl
      pt-4xl
      xs:pt-2xl
      bg-bg-1
      justify-between
      border-bg-body
      border-t-2
    "
    >
      <h2 class="block h6 xs:mb-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        <span class="text-f-1 text">© 2023 Copyright Unrasend. All rights reserved.</span>
      </h2>
      <div>
        <h2 class="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <ul class="flex xs:flex-col xs:items-center xs:mt-md">
          <li class="mr-xs xs:mb-md"><a href="#">Link</a></li>
          <li class="mr-xs xs:mb-md"><a href="#">Link</a></li>
          <li class="mr-xs xs:mb-md"><a href="#">Link</a></li>
          <li class="mr-xs xs:mb-md"><a href="#">Link</a></li>
        </ul>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}

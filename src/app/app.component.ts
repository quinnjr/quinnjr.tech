import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly $storage: StorageMap,
    private readonly $elementRef: ElementRef,
    @Inject(PLATFORM_ID) private readonly $platformId: Object
  ) {
    if (isPlatformBrowser(this.$platformId)) {
      let newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = '//cdn.credly.com/assets/utilities/embed.js';
      newScript.async = true;

      document.body.appendChild(newScript);
    }
  }
}

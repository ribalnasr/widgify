import { Component } from '@angular/core';
import { WidgifyIframeSettings } from './iframe.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { WidgifyIframe } from './iframe.class';

@Component({
	selector: 'widgify-iframe',
	templateUrl: './iframe.component.html',
})
export class WidgifyIframeComponent extends WidgifyBaseComponent<WidgifyIframeSettings, null, WidgifyIframe> {

	public sanitizedSrc = this.settings$.pipe(
		map(settings => settings.src && this.sanitizer.bypassSecurityTrustResourceUrl(settings.src))
	)

	constructor(
		private sanitizer: DomSanitizer,
	) {
		super()
	}

}

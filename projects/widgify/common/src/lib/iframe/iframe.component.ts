import { Component } from '@angular/core';
import { WiIframeSettings } from './iframe.interface';
import { WiBaseComponent } from '@widgify/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { WiIframe } from './iframe.class';

@Component({
	selector: 'wi-iframe',
	templateUrl: './iframe.component.html',
})
export class WiIframeComponent extends WiBaseComponent<WiIframeSettings, null, WiIframe> {

	public sanitizedSrc = this.changes$.pipe(
		map(([settings]) => settings.src && this.sanitizer.bypassSecurityTrustResourceUrl(settings.src))
	)

	constructor(
		private sanitizer: DomSanitizer,
	) {
		super()
	}

}

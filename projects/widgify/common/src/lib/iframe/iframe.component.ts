import { Component, ElementRef, SecurityContext } from '@angular/core';
import { WidgifyIframeSettings } from './iframe.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'widgify-iframe',
	templateUrl: './iframe.component.html',
})
export class WidgifyIframeComponent extends WidgifyBaseComponent<WidgifyIframeSettings> {

	public sanitizedSrc: SafeResourceUrl;

	public onSettingsChange = (_current: WidgifyIframeSettings, _previous: WidgifyIframeSettings) => {

		this.sanitizedSrc = this.settings.src && this.sanitizer.bypassSecurityTrustResourceUrl(this.settings.src);
	};

	constructor(
		private sanitizer: DomSanitizer,
		private element: ElementRef
	) {
		super(element)
	}

}

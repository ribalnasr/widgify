import {
	Component, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver,
	ViewEncapsulation, ComponentRef
} from '@angular/core';
import { WidgifyBase } from '../base/base.class';

@Component({
	selector: 'widgify',
	template: '<ng-template #widgetLoader></ng-template>',
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class]': 'className'
	}

})
export class WidgifyComponent<WidgetType extends WidgifyBase> {

	public className: string;
	public componentRef: ComponentRef<any>;

	@Input('widget')
	public set settings(widget: WidgetType) {
		this.addDynamicComponent(widget);
	}

	@ViewChild('widgetLoader', {
		read: ViewContainerRef,
		static: true
	}) viewContainerRef: ViewContainerRef;

	constructor(
		private factoryResolver: ComponentFactoryResolver,
	) { }

	private addDynamicComponent(widget: WidgetType = {} as WidgetType) {
		const factory = this.factoryResolver.resolveComponentFactory(widget.component);
		this.componentRef = this.viewContainerRef.createComponent(factory);
		this.viewContainerRef.insert(this.componentRef.hostView);
		this.componentRef.instance.settings = widget.settings;
		this.className = widget.settings.class || '';
	}

}

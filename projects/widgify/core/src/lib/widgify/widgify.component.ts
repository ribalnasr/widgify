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
export class WidgifyComponent<WidgetType extends WidgifyBase = WidgifyBase> {

	public className: string;
	public componentRef: ComponentRef<any>;

	@Input('widget')
	public set widget(widget: WidgetType) {
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
		if(this.componentRef && this.componentRef.instance.constructor.name !== widget.component.name) {
			this.viewContainerRef.clear()
			delete this.componentRef;
		}
		if (!this.componentRef) {
			const factory = this.factoryResolver.resolveComponentFactory(widget.component);
			this.componentRef = this.viewContainerRef.createComponent(factory);
			this.viewContainerRef.insert(this.componentRef.hostView);
		}
		this.componentRef.instance.settings = widget.settings;
		this.className = widget.settings.class || '';
	}

}

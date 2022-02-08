import {
	Component, Input, ViewContainerRef, ComponentFactoryResolver,
	ComponentRef, Directive
} from '@angular/core';
import { WidgifyBase } from '../base/base.class';

@Directive({
	selector: '[widgify]'
})
export class WidgifyDirective<WidgetType extends WidgifyBase = WidgifyBase> {

	public componentRef: ComponentRef<any>;

	@Input('widgify')
	public set widget(widget: WidgetType) {
		this.addDynamicComponent(widget);
	}

	constructor(
		private factoryResolver: ComponentFactoryResolver,
		private viewContainerRef: ViewContainerRef,
	) { }

	private addDynamicComponent(widget: WidgetType = {} as WidgetType) {
		if ((this.componentRef && this.componentRef.instance.constructor.name !== widget.component.name)) {
			this.viewContainerRef.clear()
			delete this.componentRef;

		}
		if (!this.componentRef) {
			const factory = this.factoryResolver.resolveComponentFactory(widget.component);
			this.componentRef = this.viewContainerRef.createComponent(factory);
			this.viewContainerRef.insert(this.componentRef.hostView);
		}


		this.componentRef.instance.settings = widget.settings;
		this.componentRef.instance.content = widget.content;

	}

}

@Component({
	selector: 'widgify',
	template: '<ng-template [widgify]="widget"></ng-template>	',
})
export class WidgifyComponent<WidgetType extends WidgifyBase = WidgifyBase> {

	@Input() widget: WidgetType;


}

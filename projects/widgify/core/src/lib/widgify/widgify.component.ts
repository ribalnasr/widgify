import {
	Component, Input, ViewContainerRef, ComponentFactoryResolver,
	ComponentRef, Directive
} from '@angular/core';
import { WiBaseComponent } from '../base/base.component';
import { WiBase } from '../base/base.class';

@Directive({
	selector: '[widgify]'
})
export class WiDirective<WidgetType extends WiBase = WiBase> {

	public componentRef: ComponentRef<WiBaseComponent>;

	@Input() parent?: WidgetType;

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
			this.componentRef.instance.childrenSource$ = widget.children$;
			this.componentRef.instance.settingsSource$ = widget.settings$;
			this.componentRef.instance.widget = widget;
			this.viewContainerRef.insert(this.componentRef.hostView)
		}



	}

}

@Component({
	selector: 'widgify',
	template: '<ng-template [widgify]="widget"></ng-template>	',
})
export class WiComponent<WidgetType extends WiBase = WiBase> {

	@Input() widget: WidgetType;


}


import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyDynamicComponent } from './dynamic.component';
import { Type } from '@angular/core';


export class WidgifyDynamic<T extends any = any> extends WidgifyBase<WidgifyDynamicSettings<T>, T, WidgifyDynamic<T>> {
	/**
	 * **WidgifyDynamic**
	 * 
	 * Updates child widget based on the value received from the data property.
	 * 
	 * @param data -
	 * Type: __any__
	 * - A static string, number, array, object... or any js type.
	 * - A promise that is automatically resolved and handles its result to the widget property.
	 * - An observable that is automatically observed and handles its result to the widget property on every change and updates the widget accordingly.
	 * 
	 * @param widget -
	 * Type __Widget | ((data: any) => Widget)__
	 * You can use the suplied data to update the widget type and properties
	 */


	public component: Type<WidgifyDynamicComponent<T>> = WidgifyDynamicComponent;
	public defaults: WidgifyDynamicSettings<T> = {};



}

// export const widgifyDynamic = widgifyFn<WidgifyDynamicSettings>(WidgifyDynamic);

export const widgifyDynamic = <T extends any = any>(settings?: WidgifyDynamicSettings<T>) => widgifyFn<WidgifyDynamicSettings<T>, WidgifyDynamic<T>>(WidgifyDynamic)(settings);

import { WidgifyBase } from '@widgify/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyDynamicComponent } from './dynamic.component';

export class WidgifyDynamic<T> extends WidgifyBase<WidgifyDynamicSettings<T>> {
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

	constructor(_settings?: WidgifyDynamicSettings<T>) { super(_settings) }

	public component = WidgifyDynamicComponent;
	public defaults: WidgifyDynamicSettings<T> = {};

}

export const widgifyDynamic = <T>(settings: WidgifyDynamicSettings<T>) => new WidgifyDynamic<T>(settings);
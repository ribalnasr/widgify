
import { WiBase, widgifyFn } from '@widgify/core';
import { WiDataSettings } from './data.interface';
import { WiDataComponent } from './data.component';
import { Type } from '@angular/core';


export class WiData<T extends any = any> extends WiBase<WiDataSettings<T>, T, WiData<T>> {
	/**
	 * **WiData**
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


	public component: Type<WiDataComponent<T>> = WiDataComponent;
	public defaults: WiDataSettings<T> = {};



}


export const wiData = <T extends any = any>(settings?: WiDataSettings<T>) => widgifyFn<WiDataSettings<T>, WiData<T>>(WiData)(settings);
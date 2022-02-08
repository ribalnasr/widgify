import { WidgifyBase, WidgifySettings } from '@widgify/core';
import { Observable } from 'rxjs';

export interface WidgifyDynamicSettings<T = any> extends WidgifySettings {
	/**
	 * Data can be:
	 * - A static string, number, array, object... or any js type.
	 * - A promise that is automatically resolved and handles its result to the widget property.
	 * - An observable that is automatically observed and handles its result to the widget property on every change and updates the widget accordingly.
	 */
	data?: Observable<T> | Promise<T> | T;

	/**
	 * You can use the suplied data to update the widget type and properties
	 */
	widget?: WidgifyBase | ((data: T) => WidgifyBase);
}

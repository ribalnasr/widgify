import { AbstractControl } from '@angular/forms';
import { WidgifySettings } from '@widgify/core';

export interface WidgifyIonInputSettings extends WidgifySettings {

	formControl?: AbstractControl;

	/**
	 * @property multiple
	 * @type boolean | undefined
	 * @description If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
	 * @default undefined
	 */
	multiple?: boolean | undefined;

	/**
	 * @property name
	 * @type string
	 * @description The name of the control, which is submitted with the form data.
	 * @default this.inputId
	 */
	name?: string;

	/**
	 * @property pattern
	 * @type string | undefined
	 * @description A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text",` `"search",` `"tel",` `"url",` `"email",` `"date",` or `"password",` otherwise it is ignored. When the type attribute is `"date",` pattern will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
	 * @default undefined
	 */
	pattern?: string | undefined;

	/**
	 * @property placeholder
	 * @type null | string | undefined
	 * @description Instructional text that shows before the input has a value.
	 * @default undefined
	 */
	placeholder?: null | string | undefined;

	/**
	 * @property readonly
	 * @type boolean
	 * @description If `true`, the user cannot modify the value.
	 * @default false
	 */
	readonly?: boolean;

	/**
	 * @property required
	 * @type boolean
	 * @description If `true`, the user must fill in a value before submitting a form.
	 * @default false
	 */
	required?: boolean;

	/**
	 * @property size
	 * @type number | undefined
	 * @description The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`,` "search"`, `"tel"`, `"url",` `"email"`, or `"password"`, otherwise it is ignored.
	 * @default undefined
	 */
	size?: number | undefined;

	/**
	 * @property spellcheck
	 * @type boolean
	 * @description If `true`, the element will have its spelling and grammar checked.
	 * @default undefined
	 */
	spellcheck?: boolean;

	/**
	 * @property step
	 * @type string | undefined
	 * @description Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
	 * @default undefined
	 */
	step?: string | undefined;

	/**
	 * @property type
	 * @type 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'
	 * @description The type of control to display. The default type is text.
	 * @default 'text'
	 */
	type?: 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

	/**
	 * @property value
	 * @type null | number | string | undefined
	 * @description The value of the input.
	 * @default ''
	 */
	value?: any;

}

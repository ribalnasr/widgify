import { AbstractControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { WidgifySettings } from '@widgify/core';

export interface WidgifyIonInputSettings extends Partial<IonInput>, WidgifySettings {

	formControl?: AbstractControl;

}

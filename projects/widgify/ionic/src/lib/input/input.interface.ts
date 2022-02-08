import { AbstractControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { WidgifyIonBaseSettings } from '../base/base.interface';

export interface WidgifyIonInputSettings extends Partial<IonInput>, WidgifyIonBaseSettings {

	formControl?: AbstractControl;

}

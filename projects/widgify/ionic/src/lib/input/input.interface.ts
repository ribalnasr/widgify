import { AbstractControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { WiIonBaseSettings } from '../base/base.interface';

export interface WiIonInputSettings extends Partial<IonInput>, WiIonBaseSettings {

	formControl?: AbstractControl;

}

import { Component } from '@angular/core';
import { WidgifyBase } from '@widgify/core';
import { of } from 'rxjs';
import { WidgifyGroup, WidgifyDynamic } from '@widgify/common';
import { WidgifyIonInput } from '@widgify/ionic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public base = new WidgifyBase({ class: 'base' })
  public dynamic = new WidgifyDynamic({ class: 'dynamic', data: of('dynamicData'), widget: data => new WidgifyBase({ class: data }) })
  public group = new WidgifyGroup({ widgets: [this.base, this.base] })
  public ionInput = new WidgifyIonInput({ value: 'testtest', placeholder: 'enter value' })

  public widget = this.ionInput;

  constructor() {}

}

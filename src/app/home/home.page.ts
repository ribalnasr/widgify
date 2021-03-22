import { Component } from '@angular/core';
import { WidgifyBase } from '@widgify/core';
import { of } from 'rxjs';
import { WidgifyGroup } from '../../../projects/widgify/common/src/lib/group/group.class';
import { WidgifyDynamic } from '../../../projects/widgify/common/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public base = new WidgifyBase({ class: 'base' })
  public dynamic = new WidgifyDynamic({ class: 'dynamic', data: of('dynamicData'), widget: data => new WidgifyBase({ class: data }) })
  public group = new WidgifyGroup({ widgets: [this.base, this.base] })

  public widget = this.group;

  constructor() {}

}

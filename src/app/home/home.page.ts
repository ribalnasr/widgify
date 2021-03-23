import { Component } from '@angular/core';
import { WidgifyBase } from '@widgify/core';
import { of } from 'rxjs';
import { WidgifyGroup, WidgifyDynamic, WidgifyForm, WidgifyText, WidgifyRepeater, WidgifyMouseEvent, WidgifyRepeaterList } from '@widgify/common';
import { WidgifyIonInput, WidgifyIonItem, WidgifyIonLabel } from '@widgify/ionic';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public base = new WidgifyBase({
    class: 'base'
  })

  public text = new WidgifyText({
    content: 'text goes here'
  })

  public dynamic = new WidgifyDynamic({
    class: 'dynamic',
    data: of('dynamicData'),
    widget: data => new WidgifyBase({
      class: data
    })
  })

  public form = new WidgifyForm({
    formGroup: formBuilder => formBuilder.group({
      name: ['qwd', Validators.required],
      age: [24, [Validators.required, Validators.min(12)]],
    }),
    content: formGroup => new WidgifyGroup({
      widgets: [
        new WidgifyIonItem({
          content: [
            new WidgifyIonLabel({ content: 'label' }),
            new WidgifyIonInput({ formControl: formGroup.controls.name, placeholder: 'enter value' })
          ]
        }),
      ]
    })
  })

  public ionInput = new WidgifyIonInput({
    value: 'testtest',
    placeholder: 'enter value'
  })

  private repeaterList = new WidgifyRepeaterList([2,4,6,8]);
  public repeater = new WidgifyRepeater({
    list: this.repeaterList,
    widget: row => new WidgifyMouseEvent({
      click: () => {
        console.log(row)
        return row.update(7);
      },
      widget: new WidgifyText({ content: row.data })
    })
  })

  public group = new WidgifyGroup({
    widgets: [
      new WidgifyMouseEvent({
        click: () => this.repeaterList.add(99),
        widget: new WidgifyText({ content: 'ADD' })
      }), 
      this.repeater
    ]
  })



  public widget = this.group;

}

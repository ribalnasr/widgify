import { Component, TemplateRef, ViewChild } from '@angular/core';
import { widgifyBase } from '@widgify/core';
import { BehaviorSubject, of } from 'rxjs';
import { widgifyGroup, widgifyDynamic, widgifyForm, widgifyText, widgifyRepeater, widgifyMouseEvent, widgifyRepeaterList } from '@widgify/common';
import { wiIonButton, wiIonGrid, wiIonIcon, wiIonInput, wiIonItem, wiIonLabel } from '@widgify/ionic';
import { Validators } from '@angular/forms';
import { wiIonRow } from '../../../projects/widgify/ionic/src/lib/row/row.class';
import { wiIonCol } from '../../../projects/widgify/ionic/src/lib/col/col.class';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // public base = widgifyBase({
  //   class: 'base'
  // })

  // public text = widgifyText({
  //   content: 'text goes here'
  // })

  // public dynamic = widgifyDynamic({
  //   class: 'dynamic',
  //   data: of('dynamicData'),
  //   widget: data => widgifyBase({
  //     class: data
  //   })
  // })

  // public form = widgifyForm({
  //   formGroup: formBuilder => formBuilder.group({
  //     name: ['', Validators.required],
  //     surname: ['nasr', Validators.required],
  //   }),
  //   content: formGroup => widgifyGroup({
  //     widgets: [
  //       wiIonItem({
  //         content: [
  //           wiIonLabel({ content: 'Your Name' }),
  //           wiIonInput({ value: 'Ribal', placeholder: 'Please enter your name.' })
  //         ]
  //       }),
  //       wiIonItem({
  //         content: [
  //           wiIonLabel({ content: 'Your surname' }),
  //           wiIonInput({ formControl: formGroup.controls.surname, placeholder: 'Please enter your surname.' })
  //         ]
  //       }),
  //     ]
  //   })
  // })

  // public ionInput = wiIonInput({
  //   value: 'testtest',
  //   placeholder: 'enter value'
  // })

  // private repeaterList = widgifyRepeaterList([2, 4, 6, 8]);
  // public repeater = widgifyRepeater({
  //   list: this.repeaterList,
  //   widget: row => widgifyMouseEvent({
  //     click: () => {
  //       console.log(row)
  //       return row.update(7);
  //     },
  //     widget: widgifyText({ content: row.data })
  //   })
  // })

  private clickCount = new BehaviorSubject<number>(0);
  public dynamicWidget = widgifyDynamic({
    data: this.clickCount
  }).insert(
    count => widgifyMouseEvent({
      click: () => {
        this.clickCount.next(count + 1)
      }
    }).insert(
      widgifyText({ content: 'Click me!' }),
      widgifyText({
        content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
      })
    ),
  )



  public grid = wiIonGrid({ fixed: true, }).insert(
    wiIonRow({ class: 'dwerdtrfgh' }).insert(
      wiIonCol({ size: '3', }).insert(
        widgifyText({ content: 'test' })
      ),
      wiIonCol({ size: '3' }).insert(
        widgifyText({ content: 'test' })
      )
    ),
  )


  public widget = this.grid

}

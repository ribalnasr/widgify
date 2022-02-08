import { Component, TemplateRef, ViewChild } from '@angular/core';
import { widgifyBase } from '@widgify/core';
import { BehaviorSubject, of } from 'rxjs';
import { widgifyGroup, widgifyDynamic, widgifyForm, widgifyText, widgifyRepeater, widgifyMouseEvent, widgifyRepeaterList } from '@widgify/common';
import { widgifyIonButton, widgifyIonGrid, widgifyIonIcon, widgifyIonInput, widgifyIonItem, widgifyIonLabel } from '@widgify/ionic';
import { Validators } from '@angular/forms';
import { widgifyIonRow } from '../../../projects/widgify/ionic/src/lib/row/row.class';
import { widgifyIonCol } from '../../../projects/widgify/ionic/src/lib/col/col.class';

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
  //       widgifyIonItem({
  //         content: [
  //           widgifyIonLabel({ content: 'Your Name' }),
  //           widgifyIonInput({ value: 'Ribal', placeholder: 'Please enter your name.' })
  //         ]
  //       }),
  //       widgifyIonItem({
  //         content: [
  //           widgifyIonLabel({ content: 'Your surname' }),
  //           widgifyIonInput({ formControl: formGroup.controls.surname, placeholder: 'Please enter your surname.' })
  //         ]
  //       }),
  //     ]
  //   })
  // })

  // public ionInput = widgifyIonInput({
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
    data: this.clickCount,
    widget: count =>
      widgifyMouseEvent({
        click: () => {
          this.clickCount.next(count + 1)
        }
      }).insert(
        widgifyText({ content: 'Click me!' }),
        widgifyText({
          content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
        })
      ),
  })



  public grid = widgifyIonGrid({ fixed: true, }).insert(
    widgifyIonRow().insert(
      widgifyIonCol({ size: '3', }).insert(
        widgifyText({ content: 'test' })
      ),
      widgifyIonCol({ size: '3' }).insert(
        widgifyText({ content: 'test' })
      )
    )
  )


  public widget = this.dynamicWidget

}

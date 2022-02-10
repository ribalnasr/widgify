import { Component, TemplateRef, ViewChild } from '@angular/core';
import { widgifyBase } from '@widgify/core';
import { BehaviorSubject, of } from 'rxjs';
import { widgifyDynamic, widgifyForm, widgifyText, widgifyRepeater, widgifyMouseEvent, widgifyRepeaterList } from '@widgify/common';
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


  public base = widgifyBase({
    class: 'base'
  })

  public text = widgifyText({
    content: 'text goes here'
  })

  public form = widgifyForm({
    formGroup: formBuilder => formBuilder.group({
      name: ['', Validators.required],
      surname: ['nasr', Validators.required],
    })
  }).content(
    widgifyForm({
      formGroup: formBuilder => formBuilder.group({
        name: ['', Validators.required],
        surname: ['nasr', Validators.required],
      })
    }).content(
      widgifyForm({
        formGroup: formBuilder => formBuilder.group({
          name: ['', Validators.required],
          surname: ['nasr', Validators.required],
        })
      })
    )
    // wiIonItem().content(
    //   wiIonLabel().content(
    //     widgifyText({ content: 'Name' })
    //   ),
    //   wiIonInput({ value: 'Ribal', placeholder: 'Please enter your name.' })
    // ),
    // (parent, formGroup) => {
    //   return wiIonItem().content(
    //     wiIonLabel().content(
    //       widgifyText({ content: 'SurName' })
    //     ),
    //     wiIonInput({ formControl: formGroup.controls.surname, placeholder: 'Please enter your surname.' })
    //   );
    // },
  )


  public ionInput = wiIonInput({
    value: 'testtest',
    placeholder: 'enter value'
  })

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
  }).content(
    (parent, count) => widgifyMouseEvent({
      click: () => {
        this.clickCount.next(count + 1)
      }
    }).content(
      parent => widgifyText({ content: 'Click me!' }),
      widgifyText({
        content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
      })
    ),
  )

  public idTest = wiIonGrid({ fixed: true, }).content(
    ['egrwtrb', () => widgifyText({ content: 'test' })]
  )



  public grid = wiIonGrid({ fixed: true, }).content(
    parent => wiIonRow().content(
      (parent) => wiIonCol().content(
        parent => widgifyMouseEvent({
          click: () => {
            parent.removeChildById('ID2').insertChild(
              [widgifyText({ content: 'ID4' }), 'ID4'],

            )
          }
        }).content(
          widgifyText({ content: 'click here to remove by id' })
        ),
        [widgifyText({ content: 'ID1' }), 'ID1'],
        [widgifyText({ content: 'ID2' }), 'ID2'],
        [widgifyText({ content: 'ID3' }), 'ID3'],
      )
    )
  )



  public widget = this.grid

}
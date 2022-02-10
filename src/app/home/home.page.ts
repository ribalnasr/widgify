import { Component, TemplateRef, ViewChild } from '@angular/core';
import { wiBase } from '@widgify/core';
import { BehaviorSubject, of } from 'rxjs';
import { wiData, wiForm, wiText, wiRepeater, wiMouseEvent, wiRepeaterList } from '@widgify/common';
import { wiIonButton, wiIonCol, wiIonGrid, wiIonIcon, wiIonInput, wiIonItem, wiIonLabel, wiIonRow } from '@widgify/ionic';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public base = wiBase({
    class: 'base'
  })

  public text = wiText({
    content: 'text goes here'
  })

  public form = wiForm({
    formGroup: formBuilder => formBuilder.group({
      name: ['', Validators.required],
      surname: ['nasr', Validators.required],
    })
  }).content(
    wiForm({
      formGroup: formBuilder => formBuilder.group({
        name: ['', Validators.required],
        surname: ['nasr', Validators.required],
      })
    }).content(
      wiForm({
        formGroup: formBuilder => formBuilder.group({
          name: ['', Validators.required],
          surname: ['nasr', Validators.required],
        })
      })
    )
    // wiIonItem().content(
    //   wiIonLabel().content(
    //     wiText({ content: 'Name' })
    //   ),
    //   wiIonInput({ value: 'Ribal', placeholder: 'Please enter your name.' })
    // ),
    // (parent, formGroup) => {
    //   return wiIonItem().content(
    //     wiIonLabel().content(
    //       wiText({ content: 'SurName' })
    //     ),
    //     wiIonInput({ formControl: formGroup.controls.surname, placeholder: 'Please enter your surname.' })
    //   );
    // },
  )


  public ionInput = wiIonInput({
    value: 'testtest',
    placeholder: 'enter value'
  })

  // private repeaterList = wiRepeaterList([2, 4, 6, 8]);
  // public repeater = wiRepeater({
  //   list: this.repeaterList,
  //   widget: row => wiMouseEvent({
  //     click: () => {
  //       console.log(row)
  //       return row.update(7);
  //     },
  //     widget: wiText({ content: row.data })
  //   })
  // })

  private clickCount = new BehaviorSubject<number>(0);
  public dynamicWidget = wiData({
    data: this.clickCount
  }).content(
    (parent, count) => wiMouseEvent({
      click: () => {
        this.clickCount.next(count + 1)
      }
    }).content(
      parent => {
        parent
        return wiText({ content: 'Click me!' });
      },
      wiText({
        content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
      })
    ),
  )

  public idTest = wiIonGrid({ fixed: true, }).content(
    ['egrwtrb', () => wiText({ content: 'test' })]
  )



  public grid = wiIonGrid({ fixed: true, }).content(
    parent => wiIonRow().content(
      (parent) => wiIonCol().content(
        parent => wiMouseEvent({
          click: () => {
            parent.removeChildById('ID2').insertChild(
              [wiText({ content: 'ID4' }), 'ID4'],

            )
          }
        }).content(
          wiText({ content: 'click here to remove by id' })
        ),
        [wiText({ content: 'ID1' }), 'ID1'],
        [wiText({ content: 'ID2' }), 'ID2'],
        [wiText({ content: 'ID3' }), 'ID3'],
      )
    )
  )



  public widget = this.grid

}
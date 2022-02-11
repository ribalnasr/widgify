import { Component, TemplateRef, ViewChild } from '@angular/core';
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

  public text = wiText({
    text: 'text goes here'
  })


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
  //     widget: wiText({ text: row.data })
  //   })
  // })

  private clickCount = new BehaviorSubject<number>(0);
  public dynamicWidget = wiData({
    data: this.clickCount
  }, {
    test: 1
  })
    .content(
      (parent, data) => {
        return wiMouseEvent({
          click: () => {
            // this.clickCount.next(count + 1);
            parent.updateProps({
              test: 2
            })
          }
        }).content(
          parent => {
            return wiText({ text: 'Click me!' });
          },
          wiText({
            text: ` Clicked ${parent.props.test} time${parent.props.test > 1 ? 's.' : '.'}`
          })
        );
      },
    )

  public idTest = wiIonGrid({ fixed: true, }).content(
    ['egrwtrb', () => wiText({ text: 'test' })]
  )

  public repeater = wiRepeater({
    list: ['1', 2, 3]
  }).content(
    (parent, extras) => wiText({ text: extras.row.data })
  )

  public grid = wiIonGrid({ fixed: true, }).content(
    parent => wiIonRow().content(
      (parent) => wiIonCol().content(
        parent => wiMouseEvent({
          click: () => {
            parent.removeChildById('ID2').insertChild(
              [wiText({ text: 'ID4' }), 'ID4'],

            )
          }
        }).content(
          wiText({ text: 'click here to remove by id' })
        ),
        [wiText({ text: 'ID1' }), 'ID1'],
        [wiText({ text: 'ID2' }), 'ID2'],
        [wiText({ text: 'ID3' }), 'ID3'],
      )
    )
  )



  public widget = this.repeater;

  public ionic = wiIonGrid({
    fixed: true
  }).content(
    wiIonRow({}).content(
      wiIonCol({ size: "6" }).content(
        wiText({ text: 'Hello world!' })
      ),
      parent => {
        parent['test'] = 1;
        return wiIonCol({ size: "6" }).content(

          wiMouseEvent({
            click: () => {
              parent['test']++;

              parent.removeChild(parent.children.length - 1)
            }
          }).content(


            wiIonButton({
              color: 'secondary',
              shape: 'round',
            }).content(
              wiIonIcon({ name: 'pencil', slot: 'start' }),
              wiText({ text: 'Click to play!' })
            )
          )
        );
      },
      parent => wiIonCol({ size: "12" }).content(
        wiText({ text: parent['test'] })
      ),

    )
  )

}
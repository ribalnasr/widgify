import { Component } from '@angular/core';
import { WidgifyBase } from '@widgify/core';
import { of, ReplaySubject } from 'rxjs';
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
      name: ['', Validators.required],
    }),
    content: formGroup => new WidgifyGroup({
      widgets: [
        new WidgifyIonItem({
          content: [
            new WidgifyIonLabel({ content: 'Your Name' }),
            new WidgifyIonInput({ formControl: formGroup.controls.name, placeholder: 'Please enter your name.' })
          ]
        }),
      ]
    })
  })

  public ionInput = new WidgifyIonInput({
    value: 'testtest',
    placeholder: 'enter value'
  })

  private repeaterList = new WidgifyRepeaterList([2, 4, 6, 8]);
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

  private clickCount = new ReplaySubject<number>();
  public dynamicWidget = new WidgifyDynamic({
    class: 'dynamic',
    data: this.clickCount,
    widget: count =>
      new WidgifyMouseEvent({
        click: () => {
          this.clickCount.next(count + 1)
        },
        widget: new WidgifyGroup({
          widgets: [
            new WidgifyText({ content: 'Click me!' }),
            new WidgifyText({
              content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
            })
          ]
        })
      }),
  })

  public widget = this.form;

  ngOnInit() {
    this.clickCount.next(0);
  }



}

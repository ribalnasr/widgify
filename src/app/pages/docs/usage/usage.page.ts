import { Component } from '@angular/core';
import { WidgifyDynamic, WidgifyGroup, WidgifyMouseEvent, WidgifyText } from '@widgify/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wi-usage',
  templateUrl: './usage.page.html',
})
export class UsagePage {

  public helloWidgify = new WidgifyText({
    content: 'Hello Widgify!'
  })

  private clickCount = new BehaviorSubject<number>(0);
  public clickMe = new WidgifyDynamic({
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


}

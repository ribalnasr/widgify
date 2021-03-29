import { Component } from '@angular/core';
import { WidgifyDynamic, WidgifyGroup, WidgifyMouseEvent, WidgifyText } from '@widgify/common';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'wi-usage',
  templateUrl: './usage.page.html',
})
export class UsagePage {

  public helloWidgify = new WidgifyText({
    content: 'Hello Widgify!'
  })

  private clickCount = new ReplaySubject<number>();
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

  ngOnInit() {
    this.clickCount.next(0);
  }


}

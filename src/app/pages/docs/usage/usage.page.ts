import { Component } from '@angular/core';
import { WiData, WiMouseEvent, WiText } from '@widgify/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wi-usage',
  templateUrl: './usage.page.html',
})
export class UsagePage {

  // public helloWi = new WiText({
  //   content: 'Hello Wi!'
  // })

  // private clickCount = new BehaviorSubject<number>(0);
  // public clickMe = new WiData({
  //   class: 'dynamic',
  //   data: this.clickCount,
  //   widget: count =>
  //     new WiMouseEvent({
  //       click: () => {
  //         this.clickCount.next(count + 1)
  //       },
  //       widget: new WiGroup({
  //         widgets: [
  //           new WiText({ content: 'Click me!' }),
  //           new WiText({
  //             content: ` Clicked ${count} time${count > 1 ? 's.' : '.'}`
  //           })
  //         ]
  //       })
  //     }),
  // })


}

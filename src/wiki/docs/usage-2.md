

...or a slightly more complex example:
_component.html_
```html
<widgify [widget]="clickMe"></widgify>
```
_component.ts_
```ts
  private clickCount = new BehaviorSubject<number>();
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

```


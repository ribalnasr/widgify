



## Usage

_component.html_
```html
<widgify [widgify]="helloWidgify"></widgify>
```
_component.ts_
```ts
  public helloWidgify = new WidgifyText({
    content: 'Hello Widgify!'
  })
```

...or a slightly more complex example:

_component.ts_
```ts
  private clickCount = new ReplaySubject<number>();
  public helloWidgify = new WidgifyDynamic({
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

  public widget = this.dynamicWidget;

  ngOnInit() {
    this.clickCount.next(0);
  }
```


## Installation

```sh
npm i -s @widgify/core @widgify/common
```

## Documentation

[__@widgify/core__](https://github.com/ribalnasr/widgify/wiki/Widgify-Core-Library) is the core library that makes everything possible.
It consists mainly of 2 elements:
- The base for every other widget created or to be created.
- The <widgify> component that takes a [widgify] input.

_more at https://github.com/ribalnasr/widgify/wiki/Widgify-Core-Library_

----

[__@widgify/common__](https://github.com/ribalnasr/widgify/tree/master/projects/widgify/common) are the main widgets you'll definetly use in every Widgify project.
_more at https://github.com/ribalnasr/widgify/tree/master/projects/widgify/common_

----

[__@widgify/cli__](https://github.com/ribalnasr/widgify/tree/master/projects/widgify/cli) If you're interested in making the Widgify libraries richer and create your own widgets, use the cli to easily create the base template for every new widget.
_more at https://github.com/ribalnasr/widgify/tree/master/projects/widgify/cli_


## Plugins

Widgify is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README                                                                  |
|--------|-------------------------------------------------------------------------|
| Ionic  | https://github.com/ribalnasr/widgify/tree/master/projects/widgify/ionic |


We would love to add more and more plugins, like AngularMaterial widgets or maybe some Graphs & Charts, and once again, you're welcome to create your own and share them with us to be listed here :)

### Next: [__@widgify/core →__](https://github.com/ribalnasr/widgify/wiki/Widgify-Core-Library)
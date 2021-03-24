# Widgify
## _Use Ready-Made Widgets for your Angular projects, download third-party ones or create your own._

Widgify is an Angular library that makes it easy to create and/or reuse widgets from components with a settings property and reuse them within your Angular code without having to write more than one html line.

Widgify is perfect to create content managment systems and dashboards for your application. It can be used as a complete UI or just a part of it.

## Looking for Collaborators

- Are you experienced with the latest Angular versions?
- Have you been working with creating and publishing npm libraries with Angular?
- Do you enjoy working with Ionic components?

#### Let's work on making this project bullet-proof together!


## Usage
_component.html_
```html
<widgify [widget]="helloWidgify"></widgify>
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

[__@widgify/core__](https://github.com/ribalnasr/widgify/wiki/Widgify-Core-Library) is the core library that make everything possible.
It consists mainly on 2 elements:
- The base for every other widget created or to be created.
- The <widgify> component that takes a [widget] input.

_more at https://github.com/ribalnasr/widgify/wiki/Widgify-Core-Library

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

## Donate
If you like this project and want to help me to make it my full-time job, please donate:

## License

MIT

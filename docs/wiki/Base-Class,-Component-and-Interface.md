If you're interested in creating your own widgets, you will be following these 3 steps:

1. Create a Settings interface extended from the **WidgifySettings** interface.

   This is how your widget's settings will look like.
```ts
// your-custom-widget.interface.ts

export interface YourCustomWidgetSettings extends WidgifySettings {

  /**
   * Create here the properties you need for your widget's logic.
   * For example:
   */
  names?: string[];
}

```

2. Create a component extended from the **WidgifyBaseComponent** class (with an html and possibly some css)
```ts
// your-custom-widget.component.ts

@Component({
  selector: 'your-custom-widget',
  templateUrl: './your-custom-widget.component.html'
})
export class YourCustomWidgetComponent extends WidgifyBaseComponent<YourCustomWidgetSettings> {

  /**
   * This is where you write your custom widget's logic.
   * The WidgifyBaseComponent gives you access to this.settings property which you can use directly in your widget's html,
   * or subscribe to its changes using this.settingsChanges and maybe pipe in some rxjs operators to manipulate some data.
   * For example:
   */

  public title = this.settingsChanges.pipe(
    map(settings => `My dogs names are ${settings.names.join(', ')}.`)
  )

}

```
```html
<!-- your-custom-widget.component.html -->

<h1>{{ title | async }}</h1>

<p>List of names:</p>
<ul>
  <li *ngFor=""let name of settings.names>{{ name }}</li>
</ul>

```

3. And then wrapped them up with a widget class extended from the **WidgifyBase** class:

   This is your widget! Developers will create **new** instances of this class to add your widget to their interface.
By extending from this base class you need to supply the settings interface you created in step 1, and the component that you created in step 2.

```ts
// your-custom-widget.class.ts

export class YourCustomWidget extends WidgifyBase<YourCustomWidgetSettings> {

  public component = YourCustomWidgetComponent;

  /**
   * If your widget needs some default settings, enter them here.
   */
  public defaults: YourCustomWidgetSettings = {};

}
```

----

### Using the [@widgify/cli](https://github.com/ribalnasr/widgify/wiki/widgify-cli) you can skip the above steps and ask the cli to do them for you so you can start immediately with writing your widget's logic.
To learn more about creating your own widgets with the [@widgify/cli](https://github.com/ribalnasr/widgify/wiki/widgify-cli), visit https://github.com/ribalnasr/widgify/wiki/widgify-cli.


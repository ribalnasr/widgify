Unless you're creating your own widget from scratch, the **\<widgify>** component is the only html you will have to write.

The \<widgify> component takes 1 input called **\[widgify]** and this is where you will load all the logic in your component's TS file.

```html
<!-- page.component.html -->

<widgify [widgify]="customWidget"></widgify>
```

The _customWidget_ property assigned to the component's **[widgify]** input is created in your TS file and can hold:
- a **Single Widget**
- a **Group of Widgets**
- or an unlimited number of **Nested Widgets**.

### Examples

A simple text message with a class name to enable styling:

```ts
  // page.component.ts

  import { WidgifyText } from '@widgify/common';
  // ...
  public customWidget = new WidgifyText({
    class: 'page-title',
    content: 'Hello Widgify!'
  })
```

A form with an input and button using the @widgify/ionic library:
```ts
  // page.component.ts

  import { WidgifyForm, WidgifyGroup } from '@widgify/common';
  import { WiIonItem, WiIonLabel, WiIonInput, WiIonButton } from '@widgify/ionic';
  // ...
  public customWidget = new WidgifyForm({
    formGroup: formBuilder => formBuilder.group({
      name: ['', Validators.required],
    }),
    content: formGroup => new WidgifyGroup({
      widgets: [
        new WiIonItem({
          content: [
            new WiIonLabel({ content: 'Your Name' }),
            new WiIonInput({
              formControl: formGroup.controls.name,
              placeholder: 'Please enter your name.'
            })
          ]
        }),
        new WiIonButton({
          content: 'Submit',
          action: () => {
            console.log(formGroup.value)l
          }
        })
      ]
    })
  })
```

### Next: [__Base Class, Component and Interface →__](https://github.com/ribalnasr/widgify/wiki/Base-Class,-Component-and-Interface)
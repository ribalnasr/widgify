Unless you're creating your own widget from scratch, the **\<widgify>** component is the only html you will have to write.

The \<widgify> component takes 1 input called **\[widget]** and this is where you will load all the logic in your component's TS file.

```html
<!-- page.component.html -->

<widgify [widget]="customWidget"></widgify>
```

The _customWidget_ property assigned to the component's **[widget]** input is created in your TS file and can hold:
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
  import { WidgifyIonItem, WidgifyIonLabel, WidgifyIonInput, WidgifyIonButton } from '@widgify/ionic';
  // ...
  public customWidget = new WidgifyForm({
    formGroup: formBuilder => formBuilder.group({
      name: ['', Validators.required],
    }),
    content: formGroup => new WidgifyGroup({
      widgets: [
        new WidgifyIonItem({
          content: [
            new WidgifyIonLabel({ content: 'Your Name' }),
            new WidgifyIonInput({
              formControl: formGroup.controls.name,
              placeholder: 'Please enter your name.'
            })
          ]
        }),
        new WidgifyIonButton({
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
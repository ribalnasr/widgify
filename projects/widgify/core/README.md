**@widgify/core** is the core library that make everything possible.
It consists mainly on 2 elements:

#### - The \<widgify> component that takes a [widget] input:

This is where your widgets are loaded to the UI. [Learn more](https://github.com/ribalnasr/widgify/wiki/The-widgify-Component)

#### - The base for every other widget out there:

If you're interested in creating your own widgets, you will be creating 3 files extended from
- a **WidgifyBase** class
- a **WidgifyBaseComponent** class (with an html and possibly some css)
- a **WidgifySettings** interface

[Learn more](https://github.com/ribalnasr/widgify/wiki/Base-Class,-Component-and-Interface) about these base files.

## Installation
```sh
nom i -s @widgify/core
```
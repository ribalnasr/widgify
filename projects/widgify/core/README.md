**@widgify/core** is the core library that makes everything possible.
It consists mainly of 2 elements:

#### - The \<widgify> component that takes a [widgify] input:

This is where your widgets are loaded to the UI. [Learn more](https://github.com/ribalnasr/widgify/wiki/The-wi-Component)

#### - The base for every other widget out there:

If you're interested in creating your own widgets, you will be creating 3 files extended from
- a **WiBase** class
- a **WiBaseComponent** class (with an html and possibly some css)
- a **WiSettings** interface

[Learn more](https://github.com/ribalnasr/widgify/wiki/Base-Class,-Component-and-Interface) about these base files.

## Installation
```sh
nom i -s @widgify/core
```

Ejext - Enjoy building ExtJS Application
===
### What is the Ejext ?
* An alternative to ExtJS Designer which using extended YAML to define GUI configuation
* With a library that simplify ExtJS's API and extend some components for ease of use.
* The compiler is written in Ruby script.
* The generator's output is the same as ExtJS Designer:
  1. UI script, store the ui configuration of ExtJS components.
  2. Event script, where event handling of the components located.

### Why Exjext ?
* Huge Overhead -> It reduces many configuration options which have to set in ExtJS Designer to make it just work
* Steep Learning Curve Of Layout Sysytem -> It auto apply layouts for each element appropriately 
* Easier to reposiiton the elements

> ! ExtJS is a [javascript library for cross-browser RIA](http://www.sencha.com/products/extjs3/)
    which is [licensed](http://www.sencha.com/products/extjs/license/)

> ***\*This tool is tested on ExtJS 3.4.0***

### Example Syntax and UI result
#### Basic Form
![Basic Form](https://raw.github.com/jingz/ejext/master/examples/basic_form.png)

Usage
===

### Interactive
start the server to provide output (js) from compling the code edited in the editor
```shell
    $ bundle install
    ..
    $ thin start
```
browser to localhost:3000/

or see more example at ( localhost:3000/examples/index.html )

### Commandline

```shell
   $ ruby generator/jxc. SomeExtClass.yaml
```
> output files:
> - SomeExtClass.ui.js -> UI script
> - SomeExtClass.js -> event handling script

*** include ui script before event handling script ***

### Support ExtJS components
* Form
  - fieldset
  - filefield
  - form
  - hidden
  - numberfield
  - checkbox
  - datefield
  - checkboxgroup
  - combo
  - compositefield
  - textarea
  - textfield
  - timefield
  - radio
  - radiogroup

* Grid
  - actioncolumn
  - booleancolumn
  - gridcolumn
  - runningcolumn
  - numbercolumn
  - templatecolumn
  - datecolumn
  - grid
  - paging
  - tbfill
  - tbseparator
  - editorgrid
  - # pivotgrid

* Container
  - container
  - panel
  - viewport
  - window
  - tabpanel

* Etc
  - button
  - toolbar

* Aliases
  - tab => tabpanel
  - div => container
  - gtext => gridcolumn
  - gboolean => booleancolumn
  - gnumber => numbercolumn
  - gdate => datecolumn
  - gtemplate => templatecolumn
  - gaction => actioncolumn
  - gcurrency => currencycolumn

### Extend API
...

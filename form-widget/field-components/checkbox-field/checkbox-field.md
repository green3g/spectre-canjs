
@module {can.Component} form-widget/field-components/checkbox-field <checkbox-field />
@parent form-widget.fields

@option {String} fieldType This should be set to `select` to use this template in the form widget
@option {Array.<spectre.types.CheckboxOptionProperty>} options An array of values and labels

@description
A checkbox style field.
# Example
```
{
  name: 'op',
  alias: 'is',
  fieldType: 'checkbox',
  style: 'switch' // the default is 'checkbox'
},
```


@module {can.Component} form-widget/field-components/checkbox-field <checkbox-field />
@parent form-widget.fields

@option {String} fieldType This should be set to `checkbox` to use this template in the form widget
@option {String} style Checkbox style, this can be `checkbox` or `switch`

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

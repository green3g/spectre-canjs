
@module {can.Component} sp-form/fields/checkbox-field <checkbox-field />
@parent sp-form.fields

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

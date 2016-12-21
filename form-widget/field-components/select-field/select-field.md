
@module {can.Component} form-widget/field-components/select-field <select-field />
@parent form-widget.fields

@option {String} type This should be set to `select` to use this template in the form widget
@option {Array.<spectre.types.SelectOptionProperty>} properties.options An array of values and labels

@description
A select dropdown with options. See `selectFieldProperty` and `selectOptionProperty`.
# Example
```
{
name: 'op',
alias: 'is',
placeholder: 'Choose a operator',
type: 'select',
options: [{
 label: 'Equal to',
 value: '=='
}, {
 label: 'Not equal to',
 value: '!='
}, {
 label: 'Contains',
 value: 'in'
}, {
 label: 'Does not contain',
 value: 'not_in'
}, {
 label: 'Like',
 value: 'like'
}]
},
```

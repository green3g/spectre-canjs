
@module {can.Component} sp-form/fields/sp-select-field <sp-select-field />
@memberof sp-form.fields
@group sp-select-field.types types

@option {String} fieldType This should be set to `select` to use this template in the form widget
@option {Array<sp-select-field.SelectOption>} options An array of values and labels
@option {Promise} optionsPromise A promise that asynchronously resolves to an array of [sp-form/fields/sp-select-field.SelectOption]

@description
A select dropdown with options. See `selectFieldProperty` and `selectOptionProperty`.
# Example
```
{
name: 'op',
alias: 'is',
placeholder: 'Choose a operator',
fieldType: 'select',
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

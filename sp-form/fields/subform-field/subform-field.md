
@module {can.Component} sp-form/fields/subform-field <subform-field />
@parent sp-form.fields

@option {String} fieldType This should be set to `subform`
@option {can.Map} ObjectTemplate The object to use as the form object template
@option {Array<String|util/field/Field>} formFields The form fields to use in the form

@description

This component creates a sub form fieldset that is sub object when values in the sub form change.
This can be used to store nested data in a database field or group related fields.
This is a replacement for the `json-field` to enable the ability to work with
objects as opposed to json strings. 

# Example

```javascript
{
  ObjectTemplate: DefineMap.extend({
    //object properties
    field1: 'string',
    field2: 'number'
  }),
  fieldType: 'subform'
}
```

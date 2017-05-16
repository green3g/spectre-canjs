
@module {can.Component} form-widget/field-components/json-field <json-field />
@parent form-widget.fields

@option {String} fieldType This should be set to `json` for the form widget to use this template
@option {can.Map} ObjectTemplate The object to use as the form object template
@option {Array<String|util/field.Field>} formFields The form fields to use in the form

@description

<span class="label label-warning">DEPRECATED</span>. Use subform-field instead. This component creates a sub form that is serialized to a JSON string when values in the sub form change. This can be used to store JSON data in a database field.

# Example

```javascript
{
  ObjectTemplate: DefineMap.extend({
    //object properties
    field1: 'string',
    field2: 'number'
  }),
  fieldType: 'json'
}
```

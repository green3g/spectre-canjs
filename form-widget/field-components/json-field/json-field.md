
@module {can.Component} form-widget/field-components/json-field <json-field />
@parent form-widget.fields

@option {String} type This should be set to `json` for the form widget to use this template
@option {can.Map} properties.template The object to use as the form object template
@option {Array<String|spectre.types.util/field.Field>} properties.formFields The form fields to use in the form

@description

This component creates a sub form that is serialized to a JSON string when values in the sub form change. This can be used to store JSON data in a database field.

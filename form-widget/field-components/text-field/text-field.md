
@module {can.Component} form-widget/field-components/text-field <text-field />
@parent form-widget.fields

@option {String} type This should be set to `text` or left blank for the form widget to use this template. The form widget defaults to `type: 'text'` if no value is provided here.
@option {String} properties.type The type of textbox, this can be any html input type
@option {Boolean} properties.textarea Set to true if the input textbox should be a large textarea
@link http://www.w3schools.com/html/html_form_input_types.asp HTML Input Types

@description
A generic text box with a label. If the `type` property is not provided, `'text'` is the default.

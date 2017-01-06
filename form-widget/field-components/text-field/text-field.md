
@module {can.Component} form-widget/field-components/text-field <text-field />
@parent form-widget.fields

@option {String} textType The type of textbox, this can be any html input type. The default is `text`
@option {String} fieldType This is set to `text` by default and does not need to be provided
@option {Boolean} textarea Set to true if the input textbox should be a large textarea
@link http://www.w3schools.com/html/html_form_input_types.asp HTML Input Types

@description
A generic text box with a label. If the `textType` property is not provided, `'text'` is the default.

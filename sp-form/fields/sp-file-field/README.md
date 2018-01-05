@module {can.Component} sp-form/fields/sp-file-field <sp-file-field />
@parent sp-form.fields

@option {String} fieldType Should be set to `file` for the form to use this template
@option {String} url The url up post the file upload to
@option {Boolean} multiple Whether or not to allow multiple uploads
@option {String} accept The type of media to accept
@link http://www.w3schools.com/tags/att_input_accept.asp Input Accept Types

@description

A file upload field. Once a file is selected, this component POST's the upload to a special url and returns the url result as text to the form.
<mark>This is experimental!</mark>

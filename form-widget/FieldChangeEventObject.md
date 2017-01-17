@typedef {Object} form-widget.FieldChangeEventObject FieldChangeEventObject
@parent form-widget
@option {String} name The name of the field
@option {Any} value The current value of the field, this can be any type
@option {Object} current The current saved values that were passed to the form object performing the validation. This has not been updated yet from any form changes that occurred since the last submit
@option {Object} dirty An object consisting of the values of the fields that have changed since the last submit.

@description
This event object is dispatched whenever a field in a form changes

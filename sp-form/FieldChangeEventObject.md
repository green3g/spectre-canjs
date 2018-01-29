@typedef {Object} sp-form.FieldChangeEventObject FieldChangeEventObject
@memberof sp-form.types
@option {String} name The name of the field
@option {Any} value The current value of the field, this can be any type
@option {Object} current (sp-form event only) The current saved values that were passed to the form. This has not been updated yet from any form changes that occurred since the last submit
@option {Object} dirty (sp-form event only) An object consisting of the values of the fields that have changed since the last submit.

@description
This event object is dispatched whenever a field in a form changes

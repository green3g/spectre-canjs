@typedef {Object} util/field.ValidationObject ValidationObject
@memberof util/field.class
@option {Any} value The current value of the field, this can be any type
@option {Object} current The current saved values that were passed to the form object performing the validation. This has not been updated yet from any form changes that occurred since the last submit
@option {Object} dirty An object consisting of the values of the fields that have changed since the last submit.

@description
Used by the form widget when a field value changes. A validation object is created, and passed to a validate function on the field if it exists.
A validation object consists of the current value set on the field, and two objects representing the current and dirty states of the form.
As values in the form object change, the new values are set on the dirty object. The current object preserves old values set before
the form update occurs.

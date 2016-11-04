@typedef {Object} spectre.types.FormFieldObject FormFieldObject
@parent spectre.types
@option {String} name The name of the field property
@option {String} alias A label to display for the field
@option {String} placeholder The field placeholder to display when no text is entered
@option {String} type The type of field template to use.
@option {can.view.renderer} template A template partial which gets passed the formFieldObject. You can create a renderer using `can.stache(template)`, or importing the template with steal. If this is provided, the `type` will be ignored.
@option {Object} properties Additional properties to pass to the field template. For example, `options` is a property existing in the select template
@option {String} value The value stored in the formObject. This is provided by the form-widget internally

@description
This is an object used by the form-widget to control tye type of field that is displayed and how the field is displayed. This can either be a string representing the field name or an object with the properties described below.

The value for `properties` depends on the type of field used. For example, the file-field requires a `url` inside the property.

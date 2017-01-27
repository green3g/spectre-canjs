@typedef {TableButtonObject} list-table.TableButtonObject TableButtonObject
@parent list-table
@option {String} text The title to display on the button
@option {Function(Array<Object>)} onClick A click handler to call with an array with the object.
@option {String} iconClass The class to use for the button icon
@option {String} eventName The event to dispatch when the button is clicked. This allows developers to bind functions to custom events, like `(eventName)="functionName"`

@description
Used by the list-table component to provide custom interactivity with each object or row.

@typedef {Object} spectre.types.FieldPropertiesObject FieldPropertiesObject
@parent spectre.types
@option {String} alias The label to display for this field. The default is replace underscores with spaces
and capitalize the first letter
@option {Boolean} exclude If set to true, this field will not display in the identify widget
@option {function(value, attributes)} formatter An optional formatter function for the field's value that will return a string. This function may accept two arguments, the first being the property value, and the second being an object with all of the objects properties. This is provided in case a developer wants to use other proerties to format a value.
```
formatter: function(name, props) {
  return name + ' is Awesome! and my other prop is' + props.otherProp;
}
```

@description
An object consisting of a key representing the field name and the value being properties defining each field's appearance.

This object is used by the propert-table component to control the display of each property.

## Example

```javascript
var fieldProps = {
 bbox: {
   exclude: true
 },
 STATE_NAME: {
   alias: 'Name',
   formatter: function(name, properties) {
     return name + ' is Awesome!</strong>';
   }
 }
};
```

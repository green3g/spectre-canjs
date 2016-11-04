@typedef {Object} spectre.types.filterObject FilterObject
@parent spectre.types
@description A filter object consisting of a fieldname, operator, and a value
@option {String} name The name of the field
@option {String} op The value of the operator
@option {String} val The value of the search query. This can be any sql string or expression, for example `%myValue%`

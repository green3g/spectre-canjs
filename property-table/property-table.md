<!--

@module {can.Component} property-table <property-table />
@parent spectre.components
-->

## Description

A widget for getting and displaying an objects properties in a tabular two column format.
The first column is mapped to the object property name, which is formatted by removing spaces
and capitalizing the first letter. Additional display options may be provided through the
`fields` property.

## Usage

```html
<property-table object-id="3" {connection}="connection"
 {fields}="detailFields" />
```

## Demo

@demo property-table/demo/demo.html 500

<!--
@module {can.Component} sp-filter-builder <sp-filter-builder />
@memberof spectre-canjs.components
@group sp-filter-builder.types Types
-->

## Description

A minimalist widget that allows a user to create filters from an array of
fields. Initially, only a dropdown is displayed. Upon choosing a field from the
dropdown, a dynamic filter form is generated.

The filters generated consist of three parts
 - `operator` - the type of comparator to filter on
 - `name` - the name of the field
 - `value` - the value to filter on

## Demo

@demo sp-filter-builder/demo/demo.html 500

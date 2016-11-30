import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import batch from 'can-event/batch/batch';
import deepAssign from 'can-util/js/deep-assign/deep-assign';
import {makeSentenceCase} from '../../util/string';

import template from './template.stache!';
import './filter-widget.less!';
import '../list-table/';
import '../form-widget/';
import '../form-widget/field-components/text-field/';
import '../form-widget/field-components/select-field/';

import {parseFieldArray} from '../util/field';
import {Filter, FilterList, FilterOptions} from './Filter';

/**
 * @constructor filter-widget.ViewModel ViewModel
 * @parent filter-widget
 * @group filter-widget.ViewModel.props Properties
 *
 * @description A `<filter-widget />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('FilterWidget', {
  /**
   * @prototype
   */
   /**
    * Disabled the add new form if true
     * @property {Boolean} filter-widget.ViewModel.disableAdd
     * @parent filter-widget.ViewModel.props
    */
    disableAdd: 'htmlbool',
    /**
     * A list of fields that will be used to create options in the field name
     * dropdown. Each field may have a property `filterFactory` which may return
     * one or more filter objects
     * @property {List} filter-widget.ViewModel.fields
     * @parent filter-widget.ViewModel.props
     */
    fields: {
        get (fields) {
            if (fields) {
                return fields.filter((f) => {
                    return !f.excludeFilter;
                });
            }
            return [];
        }
    },
    /**
     * An optional object template to derive field options from. If it is provided,
     * filter-widget will extract the field names and the field types and use that to create
     * filter options.
     * @property {can.Map} filter-widget.ViewModel.ObjectTemplate
     * @parent filter-widget.ViewModel.props
     */
    ObjectTemplate: {
        get (t) {
            if (t) {
                return t;
            }
            return this.connection.Map;
        }
    },
    /**
     * A list of filterObjects currently used in this widget
     * @property {Array<spectre.types.filterObject>} filter-widget.ViewModel.filters
     * @parent filter-widget.ViewModel.props
     */
    filters: {
        Value: FilterList
    },
    /**
     * The model-like object to render in the form
     * @link formFieldObject formFieldObject
     * @property {form-widget.types.formFieldObject} filter-widget.ViewModel.formObject
     * @parent filter-widget.ViewModel.props
     */
    formObject: {
        get (obj) {
            if (obj) {
                return obj;
            }
            const filter = new Filter({
                name: this.fieldOptions && this.fieldOptions.length ? this.fieldOptions[0].value : ''
            });
            return filter;
        }
    },
    /**
     * The buttonObjects to display in the list table. This widget only uses
     * a "Remove Filter" button
     * @property {Array<buttonObject>} filter-widget.ViewModel.buttons
     * @parent filter-widget.ViewModel.props
     */
    buttons: {
        value: [{
            iconClass: 'fa fa-times',
            eventName: 'delete',
            title: 'Remove Filter'
        }]
    },
    /**
     * The fields to render in the form. These fields are:
     * * name - the field name, which can be either a text field or select dropdown depending on the configuration
     * * operator - the operator to filter the field by (like, eq, etc)
     * * val - the value to filter the field by
     * @property {Array.<formFieldObject>} filter-widget.ViewModel.fields
     * @parent filter-widget.ViewModel.props
     */
    formFields: {
        get () {
            return parseFieldArray([this.nameField, this.operatorField, this.valueField]);
        }
    },
    nameField: {
        get () {
            return this.fieldOptions ? {
                formatter: makeSentenceCase,
                name: 'name',
                alias: 'Field Name',
                fieldType: 'select',
                options: this.fieldOptions
            } : {
                name: 'name',
                alias: 'Field Name',
                placeholder: 'Enter fieldname'
            };
        }
    },
    /**
     * The operator field properties
     * @property {Array.<formFieldObject>} filter-widget.ViewModel.fields
     * @parent filter-widget.ViewModel.props
     */
    operatorField: {
        Type: DefineMap,
        get () {
            return {
                name: 'operator',
                alias: 'is',
                placeholder: 'Choose an operator',
                fieldType: 'select',
                formatter (op) {
                    return FilterOptions.filter((f) => {
                        return f.value === op;
                    })[0].label;
                },
                options: this.filterOptions
            };
        }
    },
    /**
     * A custom field type for the value field to aid in entering a value to filter on
     * For example: a date type field can be specified for the value to aid
     * the user in picking a date.
     * @property {spectre.types.FormFieldObject} filter-widget.ViewModel.valueField
     * @parent filter-widget.ViewModel.props
     */
    valueField: {
        get () {
            const defaultField = {
                name: 'value',
                alias: 'Value',
                fieldType: 'text',
                placeholder: 'Enter a filter value'
            };
            // return FilterOptions.filter((f) => {
            //     return f.value === this.formObject.operator;
            // })[0].valueField ||
            return defaultField;
        }
    },
    /**
     * A getter for the filter operators that changes based on the selected field and
     * the selected field's type. The value may be filtered based on
     * 1. If there is a `type` property on the field that matches the name of the dropdown
     * 2. 2f there is a defined type in the define property for the current filter field dropdown
     * If a type is found using the rules above, the returned value will be filtered to only include
     * operators for the given type.
     * @property {Array<spectre.types.SelectOptionProperty>} filter-widget.ViewModel.filterOptions
     * @parent filter-widget.ViewModel.props
     */
    filterOptions: {
        get () {
            //get the name of the selected field
            const name = this.formObject.name;

            //if we have fields search them for a type matching the name
            //of the selected field name
            if (this.fields && this.fields.length) {
                const field = this.fields.filter((f) => {
                    return f.name === name;
                })[0];
                if (field && field.type) {
                    return FilterOptions.filter((f) => {
                        return !f.types || f.types.indexOf(field.type) !== -1;
                    });
                }
            }

            //otherwise search the ObjectTemplate for a field type
            //if it doesn't exist or the property/type doesn't exist then
            //return the whole array
            if (!this.ObjecTemplate) {
                return FilterOptions;
            }
            const define = (this.ObjectTemplate._define || this.ObjectTemplate.prototype._define).definitions;
            if (!define) {
                return FilterOptions;
            }
            if (!define[name] || !define[name].type) {
                return FilterOptions;
            }
            const type = define[name].type;
            return FilterOptions.filter((f) => {
                return f.types.indexOf(type) !== -1;
            });
        }
    },
    /**
     * An array of field options to display for the field selection dropdown. If not provided, the
     * viewModel will look for the ObjectTemplate property and display its keys. If this property does
     * not exist, the fieldOptions will be replaced with a simple text field.
     * @property {Array<spectre.types.SelectOptionProperty>} filter-widget.ViewModel.fieldOptions
     * @parent filter-widget.ViewModel.props
     */
    fieldOptions: {
        value: null,
        get () {
            const fields = [{
                value: '',
                label: 'Add a filter'
            }];
            if (this.fields) {
                return fields.concat(this.fields.map((f) => {
                    return {
                        value: f.name,
                        label: f.alias
                    };
                }).serialize());
            }
            return this.ObjectTemplate ? fields.concat(Object.keys(new this.ObjectTemplate()).map((key) => {
                return {
                    value: key,
                    label: makeSentenceCase(key)
                };
            })) : null;
        }
    },
    fieldValue: 'string',
  /**
   * @function removeFilter
   * Removes a filter from the list of filters
   * @signature
   * @param  {spectre.types.filterObject} obj   The object to remove. This is the only argument used by the function, the rest may be null.
   */
    removeFilter (obj) {
        const index = this.filters.indexOf(obj);
        this.filters.splice(index, 1);
    },
  /**
   * @function removeFilters
   * Replaces the filter array with an empty array, clearing all existing filters
   * @signature
   */
    removeFilters () {
        this.filters.replace([]);
    },
  /**
   * @function addFilter
   * Adds a new filter or set of filters to the list of filters in this widget.
   * A `filterFactory` may be defined on the field which may return one filter or an array of
   * filters.
   * @signature
   * @param  {can.Map} scope The stache scope
   * @param  {event} dom   The dom event
   * @param  {event} event The can event
   * @param  {filterObject} filterObj The object to add. This is the only argument used by the function, the rest may be null.
   * @return {Boolean} returns false to prevent event propagation from links
   */
    addFilter () {
        const name = arguments.length === 4 ? arguments[3] : arguments[0];
        const filterObj = new Filter({
            name: name
        });
        this.fieldValue = '';
        filterObj.operatorField = deepAssign({}, this.operatorField);
        filterObj.valueField = deepAssign({}, this.valueField);
        let filters;
        if (!name) {
            return false;
        }
        // const fields = this.fields;
        // const filterOption = FilterOptions.filter((f) => {
        //     return filterObj.operator === f.value;
        // })[0];
        const field = this.fields ? this.fields.filter((f) => {
            return f.name === name;
        })[0] : null;

        //get the filters
        //try a filterFactory on the field object
        //which should return one or an array of filters
        if (field && typeof field.filterFactory === 'function') {
            filters = field.filterFactory(filterObj);
        }

        //otherwise just use the filter as is
        if (!filters) {
            filters = [filterObj];
        }

        //start batch process
        batch.start();
        filters.forEach((f) => {
            this.filters.push(f);
        });
        // can-define bug
        // this.filters = this.filters.concat(filters);
        this.formObject = null;

        //end batch process
        batch.stop();

        return false;
    },
    noOp (vm, form, event) {
        event.preventDefault();
        return false;
    }
});

Component.extend({
    tag: 'filter-widget',
    ViewModel: ViewModel,
    view: template
});

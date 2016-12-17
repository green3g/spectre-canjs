/*
 * field parsing and creating utilities
 */

import {makeSentenceCase} from './string';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import assign from 'object-assign';
import dev from 'can-util/js/dev/dev';


const TEMPLATES = {
    text: '<text-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    select: '<select-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    file: '<file-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',
    json: '<json-field {properties}="." (change)="setField" {value}="getFieldValue(.)" {errors}="validationErrors" />'
};

//precompile templates
for (var type in TEMPLATES) {
    if (TEMPLATES.hasOwnProperty(type)) {
        TEMPLATES[type] = stache(TEMPLATES[type]);
    }
}

export {TEMPLATES};

export const RESERVED = [
    'get',
    'set',
    'serialize'
];


/**
 * @module util/field.Field FieldDefinition
 * @parent spectre.types
 *
 */
export const Field = DefineMap.extend('Field', {
    /**
     * The name of the property on the object, this field's name
     * @property {String} util/field.Field.name
     */
    name: 'string',
    /**
     * A friendly name for the field used to display to the user
     * The default is to capitalize the name and remove underscores
     * @property {String} util/field.Field.alias
     */
    alias: {
        type: 'string',
        get (alias) {
            if (alias) {
                return alias;
            }
            return makeSentenceCase(this.name);
        }
    },
    /**
     * A friendly name for the field used to display to the user
     * The default is to capitalize the name and remove underscores
     * @property {String} util/field.Field.alias
     */
    type: {
        type: 'string',
        value: 'string'
    },
    /**
     * The type of the form field to use when editing this field. These types
     * are defined in the `util/field.TEMPLATES` constant
     * @property {String} util/field.Field.type
     */
    fieldType: {
        type: 'string',
        value: 'text'
    },
    /**
     * The form field template to use when editing this field. This should be
     * a stache template renderer. By default, this value is set to the
     * template for the given `type` property.
     * @property {Renderer}
     */
    formTemplate: {
        get (template) {
            if (template) {
                return template;
            }
            const fType = this.fieldType;
            if (!TEMPLATES.hasOwnProperty(fType)) {
                dev.warn('No template for the given field type', fType);
                return TEMPLATES.text;
            }
            return TEMPLATES[fType];
        }
    },
    /**
     * Excludes this field from the list-table
     * @property {Boolean}
     */
    excludeListTable: {
        value: false
    },
    /**
     * Excludes this field from the property-table
     * @property {Boolean}
     */
    excludePropertyTable: {
        value: false
    },
    /**
     * Excludes this field from the form-widget
     * @property {Boolean}
     */
    excludeForm: {
        value: false
    },
    /**
     * Formats the property when it is displayed in a property or list table
     * @property {Function}
     */
    formatter: {
        value: null
    },
    /**
     * Validates a property and returns a string if the field is invalid
     * @property {Function}
     */
    validate: {
        value: null
    },
    getFormattedValue (obj) {
        return this.formatter ? this.formatter(obj[this.name], obj) : obj[this.name];
    }
});


/**
 * Converts an array of strings or field json objects into Field objects
 * @function util/field.parseFieldArray
 * @param  {Array<Field | String>} fields An array of either strings or JSON like objects representing Field object properties
 * @return {Array<Field>} The array of fields
 */
export function parseFieldArray (fields) {
    // create field objects
    return fields.map((f) => {
        // if we have a string give it a default name
        if (typeof f === 'string') {
            f = {
                name: f
            };
        }
        // add additional props with field constructor
        return new Field(f);

        // filter fields to exclude any '__' hidden props
    }).filter((f) => {
        return f.name.indexOf('__') === -1;
    });
}

/**
 * Converts a DefineMap to an array of Field objects using the define
 * property or the keys
 * @function mapToFields
 * @param  {Constructor<DefineMap>} defineMap The extended map/constructor to parse
 * @return {Array<Field>} The array of fields
 */
export function mapToFields (defineMap) {
    if (!defineMap) {
        dev.warn('map is undefined, so no fields will be generated');
        return [];
    }
    const define = assign({}, (defineMap._define || defineMap.prototype._define).definitions);
    const fields = [];
    for (var prop in define) {
        if (define.hasOwnProperty(prop)) {
            const fType = typeof define[prop].type === 'function' ? define[prop].type.name : define[prop].type;

            // remove reserved properties
            const clone = assign({}, define[prop]);
            RESERVED.forEach((r) => {
                delete clone[r];
            });

            fields.push(assign({}, {
                name: prop,
                type: 'string',
                fieldType: 'text'
            }, clone, {
                type: fType
            }));
        }
    }
    return parseFieldArray(fields);
}


import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import template from './json-field.stache!';
import {mapToFields, parseFieldArray} from '../../../../util/field';

/**
 * @constructor form-widget/field-components/json-field.ViewModel ViewModel
 * @parent form-widget/field-components/json-field
 * @group form-widget/field-components/json-field.ViewModel.props Properties
 *
 * @description A `<json-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('JSONField', {
    properties: DefineMap,
    errors: '*',
    jsonFormObject: {
        get: function () {
            const Template = this.properties.ObjectTemplate;
            const obj = this.value ? JSON.parse(this.value) : {};
            if (template) {
                return new Template(obj);
            }
            return null;
        }
    },
    formFields: {
        get () {
            if (this.attr('properties.fields')) {
                return parseFieldArray(this.properties.fields);
            }
            return mapToFields(this.jsonFormObject);
        }
    },
    saveField: function (scope, dom, event, obj) {
        const json = JSON.stringify(obj.serialize());
        this.attr('value', json);
        this.dispatch('change', [json]);
    }
});
Object.assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'json-field',
    view: template,
    ViewModel: ViewModel
});

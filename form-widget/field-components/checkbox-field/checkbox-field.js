import Component from 'can-component';
import template from './template.stache';
import Base from '~/util/field/base/FieldInputMap';

export const ViewModel = Base.extend('CheckboxField', {
    value: {
        type: 'boolean',
        set (val) {
            this.dispatch('fieldchange', [{
                value: val,
                name: this.properties.name
            }]);
            return val;
        }
    }
});

export default Component.extend({
    tag: 'checkbox-field',
    ViewModel: ViewModel,
    view: template
});

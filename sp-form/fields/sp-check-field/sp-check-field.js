import Component from 'can-component';
import template from './template.stache';
import Base from 'spectre-canjs/util/field/base/FieldInputMap';

export const ViewModel = Base.extend('CheckboxField', {
    value: {
        type: 'boolean',
        set (val) {
            if (val !== this.value) { 
                this.dispatch('fieldchange', [val, this.properties]); 
            }
            return val;
        }
    }
});

export default Component.extend({
    tag: 'sp-check-field',
    ViewModel: ViewModel,
    view: template
});

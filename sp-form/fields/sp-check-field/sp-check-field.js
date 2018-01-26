import Component from 'can-component';
import template from './template.stache';
import Field from 'spectre-canjs/util/field/Field';

export const ViewModel = Field.extend('CheckboxField', {
    value: {
        type: 'boolean',
        set (val) {
            if (val !== this.value) { 
                this.dispatch('fieldchange', [this]); 
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

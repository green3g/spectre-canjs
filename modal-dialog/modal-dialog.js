import Component from 'can-component';
import DefineMap from 'can-define/map/map';

import template from './modal-dialog.stache!';

export const ViewModel = DefineMap.extend('ModalDialog', {
    active: {value: false, type: 'htmlbool'},
    customBody: {value: false, type: 'htmlbool'},
    small: {value: false, type: 'htmlbool'},
    show () {
        this.active = true;
    },
    hide () {
        this.active = false;
    },
    toggle (visible) {
        if (typeof visible !== 'undefined') {
            this.active = Boolean(visible);
        } else {
            this.active = !this.active;
        }
    }
});

Component.extend({
    viewModel: ViewModel,
    view: template,
    tag: 'modal-dialog'
});

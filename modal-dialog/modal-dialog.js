import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

import template from './modal-dialog.stache!';

export const ViewModel = DefineMap.extend('ModalDialog', {
    active: {value: false, type: 'htmlbool'},
    customBody: {value: false, type: 'htmlbool'},
    small: {value: false, type: 'htmlbool'},
    show () {
        this.active = true;
        this.dispatch('show');
    },
    hide () {
        this.active = false;
        this.dispatch('hide');
    },
    toggle (visible) {
        if (typeof visible !== 'undefined') {
            this.active = Boolean(visible);
        } else {
            this.active = !this.active;
        }
    }
});

assign(ViewModel.prototype, canEvent);

Component.extend({
    viewModel: ViewModel,
    view: template,
    tag: 'modal-dialog'
});

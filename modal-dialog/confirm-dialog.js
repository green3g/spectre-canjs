import {ViewModel as ModalViewModel} from './modal-dialog';
import template from './confirm-dialog.stache!';
import Component from 'can-component';
import CanEvent from 'can-event';
import makePromise from 'can-util/js/make-promise/make-promise';
import assign from 'object-assign';

export const ViewModel = ModalViewModel.extend('ConfirmDialog', {
    acceptText: {
        value: 'Ok'
    },
    rejectText: {
        value: 'Cancel'
    },
    actionPromise: {
        get () {
            return new Promise((resolve, reject) => {
                this._resolveAction = resolve;
                this._rejectAction = reject;
            });
        }
    },
    onAccept () {
        if (this._resolveAction) {
            this._resolveAction(true);
        }
        this.dispatch('accept', [this]);
        this.active = false;
    },
    onReject () {
        if (this._resolveAction) {
            this._resolveAction(false);
        }
        this.dispatch('reject', [this]);
        this.active = false;
    }
});

assign(ViewModel, CanEvent);

export default Component.extend({
    tag: 'confirm-dialog',
    viewModel: ViewModel,
    view: template,
    leakScope: true
});

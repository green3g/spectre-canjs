import template from './toast-item.stache!';
import './toast-item.less!';

import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import assign from 'object-assign';


/**
 * @constructor toast-container.ViewModel ViewModel
 * @parent toast-item
 * @group toast-item.ViewModel.props Properties
 *
 * @description A `<toast-item />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('ToastItem', {
    fade: {
        type: 'boolean',
        value: true
    },
    autoHide: {
        type: 'number',
        value: 5000
    },
    useContentTag: {
        type: 'boolean',
        value: false
    },
    /**
     * @property {string} toast-item.viewModel.severity severity
     * @parent toast-item/viewModal
     * @description The class that gives the toast-item context. Must be either
     * info, success, warning, or danger.
     * @option {string} Defaults to `info`.
     */
    severity: {
        value: 'info',
        type: function (val) {
            var allowed = ['primary', 'info', 'success', 'warning', 'danger'],
                isValid = allowed.indexOf(val);

            return isValid ? val : allowed[0];
        }
    },

    /**
     * @property {boolean} toast-item.viewModel.dismissable dismissable
     * @parent toast-item/viewModal
     * @description Marks the toast-item as dismissable, which adds a "close" icon to the toast-item.
     * @option {boolean} Defaults to `true`.
     */
    dismissable: {
        value: true,
        type: 'boolean'
    },
    /**
     * @property {boolean} toast-item.viewModel.iconClass iconClass
     * @parent toast-item/viewModal
     * @description Displays a helpful icon next to the toast text
     * Set to `null` or empty string to exclude icon completely
     * @option {boolean} Defaults to `icon icon-error_outline`.
     */
    iconClass: {
        type: 'string',
        value: 'icon icon-error_outline'
    },

    /**
     * @property {boolean} toast-item.viewModel.visible visible
     * @parent toast-item/viewModal
     * @description Toggles visiblity of the toast-item
     * @option {boolean} Defaults to `false`.
     */
    visible: {
        value: true,
        type: 'boolean'
    },

    /**
     * @property {string} toast-item.viewModel.toast-itemBody body
     * @parent toast-item/viewModal
     * @description Used to programmatically change the content.
     * @option {string} Defaults to empty string.
     */
    body: {
        value: '',
        type: 'string'
    },
    /**
     * @property {string} toast-item.viewModel.toast-itemTitle heading
     * @parent toast-item/viewModal
     * @description Optional. The title of the toast-item.
     * @option {string} Defaults to empty string.
     */
    heading: {
        value: '',
        type: 'string'
    },
    fadeTime: {
        type: 'number',
        value: 1000
    },

    /**
     * Hide the toast-item
     */
    hide () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.fade) {
            setTimeout(() => {
                this.dispatch('hide', [this]);
            }, this.fadeTime);
        } else {
            this.dispatch('hide', [this]);
        }
    }
});

assign(ViewModel, CanEvent);

Component.extend({
    tag: 'toast-item',
    view: template,
    viewModel: ViewModel,
    events: {
        inserted () {
            const vm = this.viewModel;
            if (vm.autoHide) {
                setTimeout(() => {
                    vm.hide();
                }, vm.autoHide);
            }
        }
    }
});

export default ViewModel;

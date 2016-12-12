import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';

import template from './toast-container.stache!';
import {ViewModel as Toast} from './toast-item';

/**
 * @constructor toast-container.ViewModel ViewModel
 * @parent toast-container
 * @group toast-container.ViewModel.props Properties
 *
 * @description A `<toast-container />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('ToastContainer', {
    /**
     * An array of alert toasts
     * @property {Array<cGrowl>} spectre-canjs.props.toasts
     */
    toasts: {
        Value: DefineList.extend('ToastList', {
            '#': Toast
        })
    },
  /**
   * adds a new toast
   * @param {Toast} toast the toast options or toast object to add
   */
    addToast (toast) {
        if (!(toast instanceof Toast)) {
            toast = new Toast(toast);
        }
        this.toasts.push(toast);
    },
    /**
     * removes a toast
     * @param  {Toast} toast the toast object to remove 
     */
    removeToast: function (toast) {
        var index = this.toasts.indexOf(toast);
        this.toasts.splice(index, 1);
    }
});

Component.extend({
    tag: 'toast-container',
    viewModel: ViewModel,
    view: template
});

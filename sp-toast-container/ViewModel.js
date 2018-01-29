import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Toast from '../sp-toast/ViewModel';

/**
 * A `<sp-toast-container />` component's ViewModel
 * @class sp-toast-container.ViewModel ViewModel
 * @memberof sp-toast-container
 */
export default DefineMap.extend('ToastContainer', {
    /** @lends sp-toast-container.ViewModel.prototype */
    /**
     * An array of alert toasts
     * @type {Array<sp-toast.ViewModel>}
     * @memberof sp-toast-container.ViewModel.prototype
     */
    toasts: {
        Value: DefineList.extend('ToastList', {
            '#': Toast
        })
    },
    /**
   * adds a new toast
   * @param {sp-toast.ViewModel} toast the toast options or toast object to add
   */
    addToast (toast) {
        if (!(toast instanceof Toast)) {
            toast = new Toast(toast);
        }
        this.toasts.push(toast);
    },
    /**
     * Removes a toast
     * @param  {sp-toast.ViewModel} toast the toast object to remove
     */
    removeToast: function (toast) {
        var index = this.toasts.indexOf(toast);
        this.toasts.splice(index, 1);
    }
});

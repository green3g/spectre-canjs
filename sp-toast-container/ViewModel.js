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
        Default: DefineList.extend('ToastList', {
            '#': Toast
        })
    },
    /**
   * adds a new toast
   * @param {sp-toast.ViewModel} toastProps the toast options or toast object to add
   */
    addToast (toastProps) {
        this.toasts.push(toastProps);
        const newToast = this.toasts[this.toasts.length - 1];
        newToast.on('hide', (event, toastItem) => {
            this.removeToast(toastItem);
        });
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

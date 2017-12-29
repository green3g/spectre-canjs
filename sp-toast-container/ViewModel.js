import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Toast from '../sp-toast/ViewModel';

/**
 * @constructor sp-toast-container.ViewModel ViewModel
 * @parent sp-toast-container
 * @group sp-toast-container.ViewModel.props Properties
 *
 * @description A `<sp-toast-container />` component's ViewModel
 */
export default DefineMap.extend('ToastContainer', {
    /**
   * @prototype
   */
    /**
     * An array of alert toasts
     * @property {Array<sp-toast.ViewModel>} sp-toast-container.ViewModel.props.toasts toasts
     * @parent sp-toast-container.ViewModel.props
     */
    toasts: {
        Value: DefineList.extend('ToastList', {
            '#': Toast
        })
    },
    /**
   * adds a new toast
   * @function addToast
   * @signature `addToast(properties)`
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
     * @function removeToast
     * @signature `removeToast(toast)`
     * @param  {sp-toast.ViewModel} toast the toast object to remove
     */
    removeToast: function (toast) {
        var index = this.toasts.indexOf(toast);
        this.toasts.splice(index, 1);
    }
});

import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';

/**
 * A `<sp-toast />` component's ViewModel
 * @class ViewModel
 * @memberof sp-toast
 */
const ViewModel = DefineMap.extend('ToastItem', {
    /** @lends sp-toast.ViewModel.prototype */
    /**
   * whether or not to fade the sp-toast out using animate.css
   * @type {Boolean}
   * @memberof sp-toast.ViewModel.prototype
   *
   */
    fade: {
        type: 'boolean',
        value: true
    },
    /**
     * the time to autohide this sp-toast. Set to 0 to disable auto hide
     * @type {Number}
     * @memberof sp-toast.ViewModel.prototype
     */
    autoHide: {
        type: 'number',
        value: 5000
    },
    /**
     * Whether or not to use the content tag, that will display whatever
     * is inside the `<sp-toast></sp-toast>` tags. This overrides the
     * body property of this sp-toast
     * @type {Boolean}
     * @memberof sp-toast.ViewModel.prototype
     */
    useContentTag: {
        type: 'boolean',
        value: false
    },
    /**
     * @type {string}
     * @memberof sp-toast.ViewModel.prototype
     * @description The class that gives the sp-toast context. Must be either
     * info, success, warning, or danger.
     * @option {string} Defaults to `info`.
     */
    severity: {
        value: 'info',
        type: function (val) {
            var allowed = ['primary', 'info', 'success', 'warning', 'error'],
                isValid = allowed.indexOf(val) > -1;

            return isValid ? val : allowed[0];
        }
    },

    /**
     * @type {boolean}
     * @memberof sp-toast.ViewModel.prototype
     * @description Marks the sp-toast as dismissable, which adds a "close" icon to the sp-toast.
     * The default is true
     */
    dismissable: {
        value: true,
        type: 'boolean'
    },
    /**
     * @type {boolean}
     * @memberof sp-toast.ViewModel.prototype
     * @description Displays a helpful icon next to the toast text
     * Set to `null` or empty string to exclude icon completely. The default is
     * `icon icon-error_outline`
     */
    iconClass: {
        type: 'string',
        value: 'icon icon-error_outline'
    },

    /**
     * @type {boolean}
     * @memberof sp-toast.ViewModel.prototype
     * @description Toggles visiblity of the sp-toast. The default is false.
     */
    visible: {
        value: true,
        type: 'boolean'
    },

    /**
     * @type {string}
     * @memberof sp-toast.ViewModal.prototype
     * @description The content displayed in the toast. The default is an empty string.
     */
    body: {
        value: '',
        type: 'string'
    },
    /**
     * @type {string}
     * @memberof sp-toast.ViewModel.prototype
     * @description Optional. The title of the sp-toast. The default is an empty string.
     */
    heading: {
        value: '',
        type: 'string'
    },
    /**
     * Time in miliseconds to fade out this sp-toast
     * @memberof sp-toast.ViewModel.prototype
     * @type {Number}
     */
    fadeTime: {
        type: 'number',
        value: 1000
    },
    /**
     * Hide this sp-toast
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

Object.assign(ViewModel, CanEvent);
export default ViewModel;

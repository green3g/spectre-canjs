import DefineMap from 'can-define/map/map';

/**
 * A `<sp-toast />` component's ViewModel
 * @class ViewModel
 * @memberof sp-toast
 */
export default DefineMap.extend('ToastItem', {
    /** @lends sp-toast.ViewModel.prototype */
    /**
   * whether or not to fade the sp-toast out using animate.css
   * @type {Boolean}
   * @memberof sp-toast.ViewModel.prototype
   *
   */
    fade: {
        type: 'boolean',
        default: true
    },
    timer: {
        set (timer) {
            if (this.timer) {
                window.clearTimeout(this.timer);
            }
            return timer;
        }
    },
    /**
     * the time to autohide this sp-toast. Set to 0 to disable auto hide
     * @type {Number}
     * @memberof sp-toast.ViewModel.prototype
     */
    autoHide: {
        type: 'number',
        default: 5000,
        set (autohide) {
            if (autohide) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, autohide);
            }
            return autohide;
        }
    },
    /**
     * Whether or not to use the content tag, that will display whatever
     * is inside the `<sp-toast></sp-toast>` tags. This overrides the
     * body property of this sp-toast
     * @type {Boolean}
     * @memberof sp-toast.ViewModel.prototype
     */
    custom: {
        type: 'boolean',
        default: false
    },
    /**
     * @type {string}
     * @memberof sp-toast.ViewModel.prototype
     * @description The class that gives the sp-toast context. Must be either
     * info, success, warning, or danger.
     * @option {string} Defaults to `info`.
     */
    severity: {
        default: 'info',
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
        default: true,
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
        default: 'icon icon-error_outline'
    },

    /**
     * @type {boolean}
     * @memberof sp-toast.ViewModel.prototype
     * @description Toggles visiblity of the sp-toast. The default is false.
     */
    visible: {
        default: true,
        type: 'boolean',
        set (visible) {
            if (!visible) {
                this.timer = null;
            }
            return visible;
        }
    },

    /**
     * @type {string}
     * @memberof sp-toast.ViewModel.prototype
     * @description The content displayed in the toast. The default is an empty string.
     */
    body: {
        default: '',
        type: 'string'
    },
    /**
     * @type {string}
     * @memberof sp-toast.ViewModel.prototype
     * @description Optional. The title of the sp-toast. The default is an empty string.
     */
    heading: {
        default: '',
        type: 'string'
    },
    /**
     * Time in miliseconds to fade out this sp-toast
     * @memberof sp-toast.ViewModel.prototype
     * @type {Number}
     */
    fadeTime: {
        type: 'number',
        default: 1000
    },
    element: '*',
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
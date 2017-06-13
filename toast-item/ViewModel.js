import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import assign from 'object-assign';

/**
 * @constructor toast-item.ViewModel ViewModel
 * @parent toast-item
 * @group toast-item.ViewModel.props Properties
 *
 * @description A `<toast-item />` component's ViewModel
 */
const ViewModel = DefineMap.extend('ToastItem', {
  /**
   * @prototype
   */
  /**
   * whether or not to fade the toast-item out using animate.css
   * @property {Boolean} toast-item.viewModel.props.fade fade
   * @parent toast-item.ViewModel.props
   *
   */
    fade: {
        type: 'boolean',
        value: true
    },
    /**
     * the time to autohide this toast-item. Set to 0 to disable auto hide
     * @property {Number} toast-item.viewModel.props.autoHide autoHide
     * @parent toast-item.ViewModel.props
     */
    autoHide: {
        type: 'number',
        value: 5000
    },
    /**
     * Whether or not to use the content tag, that will display whatever
     * is inside the `<toast-item></toast-item>` tags. This overrides the
     * body property of this toast-item
     * @property {Boolean} toast-item.viewModel.props.useContentTag useContentTag
     * @parent toast-item.ViewModel.props
     */
    useContentTag: {
        type: 'boolean',
        value: false
    },
    /**
     * @property {string} toast-item.viewModel.severity severity
     * @parent toast-item.ViewModel.props
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
     * @parent toast-item.ViewModel.props
     * @description Marks the toast-item as dismissable, which adds a "close" icon to the toast-item.
     * The default is true
     */
    dismissable: {
        value: true,
        type: 'boolean'
    },
    /**
     * @property {boolean} toast-item.viewModel.iconClass iconClass
     * @parent toast-item.ViewModel.props
     * @description Displays a helpful icon next to the toast text
     * Set to `null` or empty string to exclude icon completely. The default is
     * `icon icon-error_outline`
     */
    iconClass: {
        type: 'string',
        value: 'icon icon-error_outline'
    },

    /**
     * @property {boolean} toast-item.viewModel.visible visible
     * @parent toast-item.ViewModel.props
     * @description Toggles visiblity of the toast-item. The default is false.
     */
    visible: {
        value: true,
        type: 'boolean'
    },

    /**
     * @property {string} toast-item.viewModel.body body
     * @parent toast-item/viewModal
     * @description The content displayed in the toast. The default is an empty string.
     */
    body: {
        value: '',
        type: 'string'
    },
    /**
     * @property {string} toast-item.viewModel.props.heading heading
     * @parent toast-item.ViewModel.props
     * @description Optional. The title of the toast-item. The default is an empty string.
     */
    heading: {
        value: '',
        type: 'string'
    },
    /**
     * Time in miliseconds to fade out this toast-item
     * @parent toast-item.ViewModel.props
     * @property {Number} toast-item.viewModel.props.fadeTime fadeTime
     */
    fadeTime: {
        type: 'number',
        value: 1000
    },
    /**
     * Hide this toast-item
     * @function hide
     * @signature `hide()`
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
export default ViewModel;

import DefineMap from 'can-define/map/map';
import CanEvent from 'can-event';
import assign from 'object-assign';

/**
 * @constructor sp-toast.ViewModel ViewModel
 * @parent sp-toast
 * @group sp-toast.ViewModel.props Properties
 *
 * @description A `<sp-toast />` component's ViewModel
 */
const ViewModel = DefineMap.extend('ToastItem', {
    /**
   * @prototype
   */
    /**
   * whether or not to fade the sp-toast out using animate.css
   * @property {Boolean} sp-toast.viewModel.props.fade fade
   * @parent sp-toast.ViewModel.props
   *
   */
    fade: {
        type: 'boolean',
        value: true
    },
    /**
     * the time to autohide this sp-toast. Set to 0 to disable auto hide
     * @property {Number} sp-toast.viewModel.props.autoHide autoHide
     * @parent sp-toast.ViewModel.props
     */
    autoHide: {
        type: 'number',
        value: 5000
    },
    /**
     * Whether or not to use the content tag, that will display whatever
     * is inside the `<sp-toast></sp-toast>` tags. This overrides the
     * body property of this sp-toast
     * @property {Boolean} sp-toast.viewModel.props.useContentTag useContentTag
     * @parent sp-toast.ViewModel.props
     */
    useContentTag: {
        type: 'boolean',
        value: false
    },
    /**
     * @property {string} sp-toast.viewModel.severity severity
     * @parent sp-toast.ViewModel.props
     * @description The class that gives the sp-toast context. Must be either
     * info, success, warning, or danger.
     * @option {string} Defaults to `info`.
     */
    severity: {
        value: 'info',
        type: function (val) {
            var allowed = ['primary', 'info', 'success', 'warning', 'danger'],
                isValid = allowed.indexOf(val) > -1;

            return isValid ? val : allowed[0];
        }
    },

    /**
     * @property {boolean} sp-toast.viewModel.dismissable dismissable
     * @parent sp-toast.ViewModel.props
     * @description Marks the sp-toast as dismissable, which adds a "close" icon to the sp-toast.
     * The default is true
     */
    dismissable: {
        value: true,
        type: 'boolean'
    },
    /**
     * @property {boolean} sp-toast.viewModel.iconClass iconClass
     * @parent sp-toast.ViewModel.props
     * @description Displays a helpful icon next to the toast text
     * Set to `null` or empty string to exclude icon completely. The default is
     * `icon icon-error_outline`
     */
    iconClass: {
        type: 'string',
        value: 'icon icon-error_outline'
    },

    /**
     * @property {boolean} sp-toast.viewModel.visible visible
     * @parent sp-toast.ViewModel.props
     * @description Toggles visiblity of the sp-toast. The default is false.
     */
    visible: {
        value: true,
        type: 'boolean'
    },

    /**
     * @property {string} sp-toast.viewModel.body body
     * @parent sp-toast/viewModal
     * @description The content displayed in the toast. The default is an empty string.
     */
    body: {
        value: '',
        type: 'string'
    },
    /**
     * @property {string} sp-toast.viewModel.props.heading heading
     * @parent sp-toast.ViewModel.props
     * @description Optional. The title of the sp-toast. The default is an empty string.
     */
    heading: {
        value: '',
        type: 'string'
    },
    /**
     * Time in miliseconds to fade out this sp-toast
     * @parent sp-toast.ViewModel.props
     * @property {Number} sp-toast.viewModel.props.fadeTime fadeTime
     */
    fadeTime: {
        type: 'number',
        value: 1000
    },
    /**
     * Hide this sp-toast
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

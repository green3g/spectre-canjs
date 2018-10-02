import DefineMap from 'can-define/map/map';
import canViewModel from 'can-view-model';

let pageId = 0;

/**
 * A `<sp-tab-page />` component's ViewModel
 * @class ViewModel
 * @memberof sp-tab-page
 *
 */
const ViewModel = DefineMap.extend('NavPage', {
    /** @lends sp-tab-page.ViewModel.prototype */
    /**
   * The display state of the page. If true, the page content will be shown
   * @type {Boolean} 
   * @memberof sp-tab-page.ViewModel.prototype
   */
    active: {type: 'boolean', default: false},
    /**
     * Add custom classes to the navigation containers nav tab.
     * @type {String} 
     * @memberof sp-tab-page.ViewModel.prototype
     */
    classes: 'string',
    /**
     * The label to display in the memberof container tab
     * @type {String} 
     * @memberof sp-tab-page.ViewModel.prototype
     */
    label: 'string',
    /**
     * Whether or not this page is currently loading
     * @type {HTMLBoolean} 
     * @memberof sp-tab-page.ViewModel.prototype
     */
    loading: {type: 'htmlbool', default: false},
    /**
     * A unique id to identify this page. The default is automatically provided.
     * @type {String} 
     * @memberof sp-tab-page.ViewModel.prototype
     */
    pageId: {
        default () {
            return 'page-' + pageId++;
        }
    },
    /**
     * A virtual property to determine if this page is active or not
     * @type {Boolean}
     */
    isActive: {
        get () {
            if (process.env.NODE_ENV !== 'production' && !this.parent) {
                // eslint-disable-next-line
                console.warn('sp-tab-page: No parent found. This component belongs inside a container component');
            }
            return this.parent && this.parent.isActive(this);
        }
    },
    /**
     * The parent containers view model
     * @type {DefineMap} 
     * @memberof sp-tab-page.ViewModel.prototype
     */
    parent: '*',

    /**
     * When the viewmodel is connected to an element, 
     * register this viewmodel with the parent
     * @param {Element} el This component's element
     */
    connectedCallback (el) {
        this.parent = canViewModel(el.parentNode);
        if (this.parent && this.parent.addPage) {
            this.parent.addPage(this);
        }
    }
});


export default ViewModel;

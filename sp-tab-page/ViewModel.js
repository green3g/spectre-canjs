import DefineMap from 'can-define/map/map';

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
   * @instance
   * @memberof sp-tab-page.ViewModel
   */
    active: {type: 'boolean', value: false},
    /**
     * Add custom classes to the navigation containers nav tab.
     * @type {String} 
      * @instance
     * @memberof sp-tab-page.ViewModel
     */
    classes: 'string',
    /**
     * The label to display in the memberof container tab
     * @type {String} 
      * @instance
     * @memberof sp-tab-page.ViewModel
     */
    label: 'string',
    /**
     * Whether or not this page is currently loading
     * @type {HTMLBoolean} 
      * @instance
     * @memberof sp-tab-page.ViewModel
     */
    loading: {type: 'htmlbool', value: false},
    /**
     * A unique id to identify this page. The default is automatically provided.
     * @type {String} 
     * @instance
     * @memberof sp-tab-page.ViewModel
     */
    pageId: {
        value: function () {
            return 'page-' + pageId++;
        }
    },
    /**
     * The parent containers view model
     * @type {DefineMap} 
     * @instance
     * @memberof sp-tab-page.ViewModel
     */
    parent: '*'
});


export default ViewModel;

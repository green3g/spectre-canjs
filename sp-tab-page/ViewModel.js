import DefineMap from 'can-define/map/map';

let pageId = 0;

/**
 * @constructor sp-tab-page.ViewModel ViewModel
 * @parent sp-tab-page
 * @group sp-tab-page.ViewModel.props Properties
 *
 * @description A `<sp-tab-page />` component's ViewModel
 */
const ViewModel = DefineMap.extend('NavPage', {
    /**
   * The display state of the page. If true, the page content will be shown
   * @property {Boolean} sp-tab-page.ViewModel.props.active active
   * @parent sp-tab-page.ViewModel.props
   */
    active: {type: 'boolean', value: false},
    /**
     * Add custom classes to the navigation containers nav tab.
     * @type {String} sp-tab-page.ViewModel.props.classes classes
     * @parent sp-tab-page.ViewModel.props
     */
    classes: 'string',
    /**
     * The label to display in the parent container tab
     * @property {String} sp-tab-page.ViewModel.props.label label
     * @parent sp-tab-page.ViewModel.props
     */
    label: 'string',
    /**
     * Whether or not this page is currently loading
     * @property {HTMLBoolean} sp-tab-page.ViewModel.props.loading loading
     * @parent sp-tab-page.ViewModel.props
     */
    loading: {type: 'htmlbool', value: false},
    /**
     * A unique id to identify this page. The default is automatically provided.
     * @property {String} sp-tab-page.ViewModel.props.pageId pageId
     * @parent sp-tab-page.ViewModel.props
     */
    pageId: {
        value: function () {
            return 'page-' + pageId++;
        }
    },
    /**
     * The parent containers view model
     * @property {DefineMap} sp-tab-page.ViewModel.props.parent parent
     * @parent sp-tab-page.ViewModel.props
     */
    parent: '*'
});


export default ViewModel;

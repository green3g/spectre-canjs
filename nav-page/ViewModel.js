import DefineMap from 'can-define/map/map';

let pageId = 0;

/**
 * @constructor nav-page.ViewModel ViewModel
 * @parent nav-page
 * @group nav-page.ViewModel.props Properties
 *
 * @description A `<nav-page />` component's ViewModel
 */
const ViewModel = DefineMap.extend('NavPage', {
  /**
   * The display state of the page. If true, the page content will be shown
   * @property {Boolean} nav-page.ViewModel.props.active active
   * @parent nav-page.ViewModel.props
   */
    active: {type: 'boolean', value: false},
    /**
     * The label to display in the parent container tab
     * @property {String} nav-page.ViewModel.props.label label
     * @parent nav-page.ViewModel.props
     */
    label: 'string',
    /**
     * Whether or not this page is currently loading
     * @property {HTMLBoolean} nav-page.ViewModel.props.loading loading
     * @parent nav-page.ViewModel.props
     */
    loading: {type: 'htmlbool', value: false},
    /**
     * A unique id to identify this page. The default is automatically provided.
     * @property {String} nav-page.ViewModel.props.pageId pageId
     * @parent nav-page.ViewModel.props
     */
    pageId: {
        value: function () {
            return 'page-' + pageId++;
        }
    },
    /**
     * The parent containers view model
     * @property {DefineMap} nav-page.ViewModel.props.parent parent
     * @parent nav-page.ViewModel.props
     */
    parent: '*'
});


export default ViewModel;

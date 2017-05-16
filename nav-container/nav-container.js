import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import canViewModel from 'can-view-model';

import template from './nav-container.stache!';
import pageTemplate from './nav-page.stache!';
import './nav-container.less!';


let pageId = 0;

/**
 * @constructor nav-page.ViewModel ViewModel
 * @parent nav-page
 * @group nav-container.ViewModel.props Properties
 *
 * @description A `<nav-page />` component's ViewModel
 */
export const PageViewModel = DefineMap.extend('NavPage', {
  /**
   * The display state of the page. If true, the page content will be shown
   * @property {Boolean} nav-container.ViewModel.props.active active
   * @parent nav-container.ViewModel.props
   */
    active: {type: 'boolean', value: false},
    /**
     * The label to display in the parent container tab
     * @property {String} nav-container.ViewModel.props.label label
     * @parent nav-container.ViewModel.props
     */
    label: 'string',
    /**
     * Whether or not this page is currently loading
     * @property {HTMLBoolean} nav-container.ViewModel.props.loading loading
     * @parent nav-container.ViewModel.props
     */
    loading: {type: 'htmlbool', value: false},
    /**
     * A unique id to identify this page. The default is automatically provided.
     * @property {String} nav-container.ViewModel.props.pageId pageId
     * @parent nav-container.ViewModel.props
     */
    pageId: {
        value: function () {
            return 'page-' + pageId++;
        }
    },
    /**
     * The parent containers view model
     * @property {DefineMap} nav-container.ViewModel.props.parent parent
     * @parent nav-container.ViewModel.props
     */
    parent: '*'
});

export const PageList = DefineList.extend('NavPageList', {
    Map: PageViewModel
});


/**
 * @constructor nav-container.ViewModel ViewModel
 * @parent nav-container
 * @group nav-container.ViewModel.props Properties
 *
 * @description A `<nav-container />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('NavContainer', {
  /**
   * @prototype
   */
    /**
     * An array of pages currently displayed in this nav-container
     * @parent nav-container.ViewModel.props
     * @property {Array<nav-page.ViewModel>} nav-container.ViewModel.props.pages pages
     */
    pages: {Value: PageList},
    /**
     * The currently active page
     * @property {nav-page.ViewModel} nav-container.ViewModel.props.activePage activePage
     * @parent nav-container.ViewModel.props
     */
    activePage: {
        get () {

            let active;

            if (!this.pages.length) {
                return null;
            }

            // lookup active page id
            active = this.pages.filter((p) => {
                return p.pageId === this.activeId;
            });

            if (active.length) {
                active = active[0];
            } else {
                active = this.pages[0];
            }

            return active;
        }
    },
    /**
     * The id of the page that is currently active. This value should be
     * set to change the activePage
     * @parent nav-container.ViewModel.props
     * @property {String} nav-container.ViewModel.props.activeId activeId
     */
    activeId: 'string',
    /**
     *  When a `<nav-page>` element is inserted into the document, it calls this
     *  method to add the page's scope to thepages array.
     *  @function addPage
     *  @param {nav-page.ViewModel} page the page view model that was added
     *
     */
    addPage (page) {
        this.pages.push(page);
    },
    /**
     * When a `<page>` element is removed from the document, it calls this
     * method to remove the page's scope from the pages array.
     * @function removePage
     * @signature `removePage(page)`
     * @param {nav-page.ViewModel} page the page view model to remove
     */
    removePage (page) {
        var pages = this.pages;
        pages.splice(pages.indexOf(page), 1);
        // if the page was active, make the first item active
        if (page === this.active) {
            if (pages.length) {
                this.activeId = pages[0].pageId;
            } else {
                this.activeId = null;
            }
        }
    },
    /**
     * Sets a page to the currently selected/active page
     * @function makeActive
     * @signature `makeActive(page)`
     * @param {nav-page.ViewModel} page The page to set as the active page
     */
    makeActive (page) {
        if (page === this.activePage) {
            return;
        }
        this.activeId = page.pageId;
    },
    /**
     * Used to check whether the current page is the active page
     * @function isActive
     * @signature `isActive(page)`
     * @param {nav-page.ViewModel} page The page to check whether is active
     * @return {Boolean} whether or not the page is active
     */
    isActive (page) {
        if (!page) {
            return false;
        }
        return page === this.activePage;
    }
});

export const NavPageComponent = Component.extend({
    tag: 'nav-page',
    view: pageTemplate,
    ViewModel: PageViewModel,
    events: {
        inserted: function () {
            this.viewModel.parent = canViewModel(this.element.parentNode);
            if (this.viewModel.parent && this.viewModel.parent.addPage) {
                this.viewModel.parent.addPage(this.viewModel);
            }
        },
        removed: function () {
            if (this.viewModel.parent && this.viewModel.parent.removePage) {
                this.viewModel.parent.removePage(this.viewModel);
            }
            this.viewModel.parent = null;
        }
    }
});

export default Component.extend({
    tag: 'nav-container',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

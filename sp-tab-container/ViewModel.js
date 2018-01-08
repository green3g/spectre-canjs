import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Page from '../sp-tab-page/ViewModel';

/**
 * An extended DefineList with type set to a nav page ViewModel
 * @constructor sp-tab-page/PageList PageList
 * @parent sp-tab-page
 */
const PageList = DefineList.extend('NavPageList', {
    '#': Page
});

/**
 * @constructor sp-tab-container.ViewModel ViewModel
 * @parent sp-tab-container
 * @group sp-tab-container.ViewModel.props Properties
 *
 * @description A `<sp-tab-container />` component's ViewModel
 */
const ViewModel = DefineMap.extend('NavContainer', {
    /**
   * @prototype
   */
    /**
     * An array of pages currently displayed in this sp-tab-container
     * @parent sp-tab-container.ViewModel.props
     * @property {Array<sp-tab-page.ViewModel>} sp-tab-container.ViewModel.props.pages pages
     */
    pages: {Value: PageList},
    /**
     * The currently active page
     * @property {sp-tab-page.ViewModel} sp-tab-container.ViewModel.props.activePage activePage
     * @parent sp-tab-container.ViewModel.props
     */
    activePage: {
        get () {

            let active;

            if (!this.pages.length) {
                return null;
            }
            
            if (this.activeId === null) {
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
     * @parent sp-tab-container.ViewModel.props
     * @property {String} sp-tab-container.ViewModel.props.activeId activeId
     */
    activeId: 'string',
    /**
     *  When a `<sp-tab-page>` element is inserted into the document, it calls this
     *  method to add the page's scope to thepages array.
     *  @function addPage
     *  @param {sp-tab-page.ViewModel} page the page view model that was added
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
     * @param {sp-tab-page.ViewModel} page the page view model to remove
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
     * @param {sp-tab-page.ViewModel} page The page to set as the active page
     */
    makeActive (page) {
        if (page === this.activePage) {
            return;
        }
        this.activeId = page.pageId;
    },
    /**
     * Used by nav containers that might need to toggle pages, rather than just
     * activate them (accordion)
     * @param {sp-tab-page.ViewModel} page the page to toggle
     */
    toggle (page) {
        if (page === this.activePage) {
            this.activeId = null;
            return;
        }
      
        this.activeId = page.pageId;
    },
    /**
     * Used to check whether the current page is the active page
     * @function isActive
     * @signature `isActive(page)`
     * @param {sp-tab-page.ViewModel} page The page to check whether is active
     * @return {Boolean} whether or not the page is active
     */
    isActive (page) {
        if (!page) {
            return false;
        }
        return page === this.activePage;
    }
});

export default ViewModel;

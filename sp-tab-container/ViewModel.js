import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Page from '../sp-tab-page/ViewModel';

const PageList = DefineList.extend('NavPageList', {
    '#': Page
});

/**
 * A `<sp-tab-container />` component's ViewModel
 * @class ViewModel
 * @memberof sp-tab-container
 */
const ViewModel = DefineMap.extend('NavContainer', {
    /** @lends sp-tab-container.ViewModel.prototype */
    /**
     * An array of pages currently displayed in this sp-tab-container
     * @memberof sp-tab-container.ViewModel.prototype
     * @type {Array<sp-tab-page.ViewModel>}
     */
    pages: {Value: PageList},
    /**
     * The currently active page
     * @type {sp-tab-page.ViewModel}
     * @memberof sp-tab-container.ViewModel.prototype
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
     * @memberof sp-tab-container.ViewModel.prototype
     * @type {String}
     */
    activeId: 'string',
    /**
     *  When a `<sp-tab-page>` element is inserted into the document, it calls this
     *  method to add the page's scope to thepages array.
     *  @param {sp-tab-page.ViewModel} page the page view model that was added
     *
     */
    addPage (page) {
        this.pages.push(page);
    },
    /**
     * When a `<page>` element is removed from the document, it calls this
     * method to remove the page's scope from the pages array.
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

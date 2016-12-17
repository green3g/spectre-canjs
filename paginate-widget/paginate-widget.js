import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import template from './template.stache!';
import './paginate-widget.less!';
/**
 * @constructor paginate-widget.ViewModel ViewModel
 * @parent paginate-widget
 * @group paginate-widget.ViewModel.props Properties
 *
 * @description A `<paginate-widget />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('PaginateWidget', {
    /**
     * @prototype
     */
    /**
     * The number of pages to show in the widget
     * @property {Number} paginate-widget.ViewModel.props.pages
     * @parent paginate-widget.ViewModel.props
     */
    pages: {
        type: 'number',
        value: 10
    },
    /**
     * The active page index
     * @property {Number} paginate-widget.ViewModel.props.activePageIndex
     * @parent paginate-widget.ViewModel.props
     */
    activePageIndex: {
        value: 0,
        type: 'number'
    },
    /**
     * The number of pages to show on either side of the currently selected page. The default is 3. For example, if the selected page is 5, the visible pages should be 2,3,4,5,6,7,8.
     * @property {Number}  paginate-widget.ViewModel.props.activeOffset
     * @parent paginate-widget.ViewModel.props
     */
    activeOffset: {
        value: 3,
        type: 'number'
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a next page
     * @property {Boolean} paginate-widget.ViewModel.props.hasNext
     * @parent paginate-widget.ViewModel.props
     */
    hasNext: {
        get () {
            return this.activePageIndex < this.pages - 1;
        }
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a previous page
     * @property {Boolean} paginate-widget.ViewModel.props.hasPrevious
     * @parent paginate-widget.ViewModel.props
     */
    hasPrevious: {
        get () {
            return this.activePageIndex > 0;
        }
    },
    /**
     * The array of currently shown pages in the widget
     * @property {Array<Number>} paginate-widget.ViewModel.props.visiblePages
     * @parent paginate-widget.ViewModel.props
     */
    visiblePages: {
        get () {
            var pages = this.pages;
            var active = this.activePageIndex + 1;
            var arr = this.pageArray.filter((p) => {
                return p <= active + 3 && p >= active - 3 && p > 0 && p <= pages;
            });
            return arr;
        }
    },
    /**
     * The array of numbers 0 through number of pages. This is a helper for the visiblePages getter
     * @property {Array<Number>} paginate-widget.ViewModel.props.pageArray
     * @parent paginate-widget.ViewModel.props
     */
    pageArray: {
        get () {
            var arr = [];
            for (var i = 1; i <= this.pages; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
    /**
     * Hides the first button
     * @signature `<paginate-widget hide-first />`
     * @property {HTMLBoolean} paginate-widget.ViewModel.props.hideFirst
     * @parent paginate-widget.ViewModel.props
     */
    hideFirst: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the last button
     * @signature `<paginate-widget hide-last />`
     * @property {HTMLBoolean} paginate-widget.ViewModel.props.hideLast
     * @parent paginate-widget.ViewModel.props
     */
    hideLast: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the previous button
     * @signature `<paginate-widget hide-previous />`
     * @property {HTMLBoolean} paginate-widget.ViewModel.props.hidePrevious
     * @parent paginate-widget.ViewModel.props
     */
    hidePrevious: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the next button
     * @signature `<paginate-widget hide-next />`
     * @property {HTMLBoolean} paginate-widget.ViewModel.props.hideNext
     * @parent paginate-widget.ViewModel.props
     */
    hideNext: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the list of pages
     * @signature `<paginate-widget hide-pages />`
     * @property {HTMLBoolean} paginate-widget.ViewModel.props.hidePages
     * @parent paginate-widget.ViewModel.props
     */
    hidePages: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Navigates to the next page
     * @signature
     * @function gotoNext
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoNext () {
        if (this.hasNext) {
            this.activePageIndex++;
        }
        return false;
    },
    /**
     * Navigates to the previous page
     * @function gotoPrevious
     * @signature
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoPrevious () {
        if (this.hasPrevious) {
            this.activePageIndex--;
        }
        return false;
    },
    /**
     * Navigates to the first page
     * @function gotoFirst
     * @signature
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoFirst () {
        this.activePageIndex = 0;
        return false;
    },
    /**
     * Navigates to the last page
     * @function gotoLast
     * @signature
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoLast () {
        this.activePageIndex = this.pages - 1;
        return false;
    },
    /**
     * Navigates to the page
     * @function gotoPage
     * @signature
     * @param {Number} p The page index to navigate to
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoPage (p) {
        if (p > 0 && p <= this.pages) {
            this.activePageIndex = p - 1;
        }
        return false;
    },
    /**
     * Checks to see if the passed page is the active page index
     * @function isActive
     * @signature
     * @param {Number} p The page to check
     * @return {Boolean} Returns a boolean value that tells the template whether or not the passed page is the active page
     */
    isActive (p) {
        return this.activePageIndex === p - 1;
    }
});

Component.extend({
    tag: 'paginate-widget',
    ViewModel: ViewModel,
    view: template
});

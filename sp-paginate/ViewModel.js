import DefineMap from 'can-define/map/map';

/**
 * @constructor sp-paginate.ViewModel ViewModel
 * @parent sp-paginate
 * @group sp-paginate.ViewModel.props Properties
 *
 * @description A `<sp-paginate />` component's ViewModel
 */
const ViewModel = DefineMap.extend('PaginateWidget', {
    /**
     * @prototype
     */
    /**
     * The number of pages to show in the widget
     * @property {Number} sp-paginate.ViewModel.props.pages
     * @parent sp-paginate.ViewModel.props
     */
    pages: {
        type: 'number',
        value: 10
    },
    /**
     * The active page index
     * @property {Number} sp-paginate.ViewModel.props.activePageIndex
     * @parent sp-paginate.ViewModel.props
     */
    activePageIndex: {
        value: 0,
        type: 'number'
    },
    /**
     * The number of pages to show on either side of the currently selected page. The default is 3. For example, if the selected page is 5, the visible pages should be 2,3,4,5,6,7,8.
     * @property {Number}  sp-paginate.ViewModel.props.activeOffset
     * @parent sp-paginate.ViewModel.props
     */
    activeOffset: {
        value: 3,
        type: 'number'
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a next page
     * @property {Boolean} sp-paginate.ViewModel.props.hasNext
     * @parent sp-paginate.ViewModel.props
     */
    hasNext: {
        get () {
            return this.activePageIndex < this.pages - 1;
        }
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a previous page
     * @property {Boolean} sp-paginate.ViewModel.props.hasPrevious
     * @parent sp-paginate.ViewModel.props
     */
    hasPrevious: {
        get () {
            return this.activePageIndex > 0;
        }
    },
    /**
     * The array of currently shown pages in the widget
     * @property {Array<Number>} sp-paginate.ViewModel.props.visiblePages
     * @parent sp-paginate.ViewModel.props
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
     * @property {Array<Number>} sp-paginate.ViewModel.props.pageArray
     * @parent sp-paginate.ViewModel.props
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
     * @signature `<sp-paginate hide-first />`
     * @property {HTMLBoolean} sp-paginate.ViewModel.props.hideFirst
     * @parent sp-paginate.ViewModel.props
     */
    hideFirst: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the last button
     * @signature `<sp-paginate hide-last />`
     * @property {HTMLBoolean} sp-paginate.ViewModel.props.hideLast
     * @parent sp-paginate.ViewModel.props
     */
    hideLast: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the previous button
     * @signature `<sp-paginate hide-previous />`
     * @property {HTMLBoolean} sp-paginate.ViewModel.props.hidePrevious
     * @parent sp-paginate.ViewModel.props
     */
    hidePrevious: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the next button
     * @signature `<sp-paginate hide-next />`
     * @property {HTMLBoolean} sp-paginate.ViewModel.props.hideNext
     * @parent sp-paginate.ViewModel.props
     */
    hideNext: {
        type: 'htmlbool',
        value: false
    },
    /**
     * Hides the list of pages
     * @signature `<sp-paginate hide-pages />`
     * @property {HTMLBoolean} sp-paginate.ViewModel.props.hidePages
     * @parent sp-paginate.ViewModel.props
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

export default ViewModel;

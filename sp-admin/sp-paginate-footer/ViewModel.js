import DefineMap from 'can-define/map/map';

/**
 * @constructor sp-paginate-footer.ViewModel ViewModel
 * @parent sp-paginate-footer
 * @group sp-paginate-footer.ViewModel.props Properties
 *
 * @description A `<sp-paginate-footer />` component's ViewModel
 */
export default DefineMap.extend('AdminPaginate', {
    total: 'number',
    /**
   * The number of records to show per page
   * @property {Number} sp-paginate-footer.ViewModel.props.perPage perPage
   * @parent sp-paginate-footer.ViewModel.props
   */
    perPage: {default: 10, type: 'number'},
    /**
   * The current page index selected
   * @property {number} sp-paginate-footer.ViewModel.props.pageIndex pageIndex
   * @parent sp-paginate-footer.ViewModel.props
   */
    pageIndex: {default: 0, type: 'number'},
    /**
   * The current page index incremented by one
   * @property {Number} sp-paginate-footer.ViewModel.props.pageNumber pageNumber
   * @parent sp-paginate-footer.ViewModel.props
   */
    pageNumber: {
        get () {
            return this.pageIndex + 1;
        }
    },
    /**
   * A virtual property that calculates the number of total pages to show
   * on the list page. This controls the paginator widget. It uses the `totalItems` property
   * and the `parameters.perPage` value to calculate a number of pages to display.
   * @property {Number} sp-paginate-footer.ViewModel.props.totalPages totalPages
   * @parent sp-paginate-footer.ViewModel.props
   */
    totalPages: {
        get () {
            // round up to the nearest integer
            const totalPages = Math.ceil(this.total / this.perPage);
            return totalPages || 1;
        }
    },
    /**
   * The array of per page counts to display in the per page switcher. This
   * list is automatically filtered to include options provided where one
   * step below is less than the total count. Example, if there are
   * 30 total items, the default list returned will be 10, 20, and 50.
   * If no options are returned the per page switcher is hidden.
   * @property {Array<Number>} sp-paginate-footer.ViewModel.props.perPageOptions perPageOptions
   * @parent sp-paginate-footer.ViewModel.props
   */
    perPageOptions: {
        default () {
            return [10, 20, 50, 100];
        },
        get (counts) {
            return counts.filter((c, index) => {
                return counts[index ? index - 1 : index] < this.total;
            });
        }
    },
    /**
   * A helper to show or hide the paginate-widget. If totalPages is less than
   * 2, the paginate widget will not be shown.
   * @property {Boolean} sp-paginate-footer.ViewModel.props.showPaginate showPaginate
   * @parent sp-paginate-footer.ViewModel.props
   */
    showPaginate: {
        type: 'boolean',
        get () {
            return this.totalPages > 1;
        }
    },
    /**
   * The current start item number in the count display
   * @property {Number} sp-paginate-footer.ViewModel.props.itemFrom itemFrom
   * @parent sp-paginate-footer.ViewModel.props
   */
    itemFrom: {
        get () {
            return this.pageIndex * this.perPage + 1;
        }
    },
    /**
   * The current end item number in the count display
   * @property {Number} sp-paginate-footer.ViewModel.props.itemTo itemTo
   * @parent sp-paginate-footer.ViewModel.props
   */
    itemTo: {
        get () {
            const itemTo = (this.pageNumber) * this.perPage;
            if (itemTo < this.total) {
                return itemTo;
            }
            return this.total;
        }
    }
});
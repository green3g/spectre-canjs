import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import template from './paginate-footer.stache';
import './paginate-footer.less';

import '~/paginate-widget/paginate-widget';

/**
 * @module paginate-footer
 */

/**
 * @constructor paginate-footer.ViewModel ViewModel
 * @parent paginate-footer
 * @group paginate-footer.ViewModel.props Properties
 *
 * @description A `<paginate-footer />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('PaginateFooter', {
    total: 'number',
  /**
   * The number of records to show per page
   * @property {Number} paginate-footer.ViewModel.props.perPage perPage
   * @parent paginate-footer.ViewModel.props
   */
    perPage: 'number',
  /**
   * The current page index selected
   * @property {number} paginate-footer.ViewModel.props.pageIndex pageIndex
   * @parent paginate-footer.ViewModel.props
   */
    pageIndex: 'number',
  /**
   * The current page index incremented by one
   * @property {Number} paginate-footer.ViewModel.props.pageNumber pageNumber
   * @parent paginate-footer.ViewModel.props
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
   * @property {Number} paginate-footer.ViewModel.props.totalPages totalPages
   * @parent paginate-footer.ViewModel.props
   */
    totalPages: {
        get () {
      //round up to the nearest integer
            const totalPages = Math.ceil(this.total / this.perPage);
            return totalPages ? totalPages : 1;
        }
    },
  /**
   * The array of per page counts to display in the per page switcher. This
   * list is automatically filtered to include options provided where one
   * step below is less than the total count. Example, if there are
   * 30 total items, the default list returned will be 10, 20, and 50.
   * If no options are returned the per page switcher is hidden.
   * @property {Array<Number>} paginate-footer.ViewModel.props.perPageOptions perPageOptions
   * @parent paginate-footer.ViewModel.props
   */
    perPageOptions: {
        Value () {
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
   * @property {Boolean} paginate-footer.ViewModel.props.showPaginate showPaginate
   * @parent paginate-footer.ViewModel.props
   */
    showPaginate: {
        type: 'boolean',
        get () {
            return this.totalPages > 1;
        }
    },
  /**
   * The current start item number in the count display
   * @property {Number} paginate-footer.ViewModel.props.itemFrom itemFrom
   * @parent paginate-footer.ViewModel.props
   */
    itemFrom: {
        get () {
            return this.pageIndex * this.perPage + 1;
        }
    },
  /**
   * The current end item number in the count display
   * @property {Number} paginate-footer.ViewModel.props.itemTo itemTo
   * @parent paginate-footer.ViewModel.props
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

export default Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'paginate-footer'
});

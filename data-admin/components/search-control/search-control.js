import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';
import template from './search-control.stache';
import './search-control.less';

import {FilterList, Filter} from '~/filter-widget/Filter';
import '~/filter-widget/filter-widget';
import '~/dropdown-menu/dropdown-menu';

/**
 * @constructor search-control.ViewModel ViewModel
 * @parent search-control
 * @group search-control.ViewModel.props Properties
 *
 * @description A `<search-control />` component's ViewModel
 */
export const ViewModel = DefineMap.extend({
  /**
   * @prototype
   */
  
  /**
   * The current filters
   * @property {Array<filter-widget.Filter>} search-control.ViewModel.props.filters filters
   * @parent search-control.ViewModel.props
   */
    filters: FilterList,
    /**
     * The fields to search on. These fields will be excluded from the fitler
     * if `filter: false`
     * @property {Array<util/field.Field>} search-control.ViewModel.props.fields fields
     */
    fields: DefineList,
    /**
     * The view object is used to retrieve quickFilters and the ObjectTemplate
     * @property {Object} search-control.ViewModel.props.view view
     * @parent search-control.ViewModel.props
     */
    view: '*',

  /**
   * A helper for toggling quick filter dropdowns from the template,
   * this accepts simplified parameters, similar to the addFilter function.
   * Depending on the arguments several outcomes may occur:
   *  - If a filter does not exist with the given field name, it will be created
   *  - If a filter does exist with the field name, but the value is different,
   *  the filter will be updated with the new value
   *  - If the filter does exist with the current value, the filter will be removed
   *  The operator used will be `'equals'`
   *  @function toggleQuickFilter
   *  @signature
   *  @param {String} fieldName The field name to filter on
   *  @param {Any} value The value to filter on
   *  @param {Event} event The dom click event to cancel
   *  @return {Boolean} Returns false to prevent page navigation
   */
    toggleQuickFilter (fieldName, value, event) {
        if (event) {
            event.preventDefault();
        }
        let filter = this.filters.filter((f) => {
            return f.name === fieldName;
        });
        if (filter.length) {
            filter = filter[0];

          // if the filter exists but the values are the same, remove the filter
            if (filter.value === value) {
                const index = this.filters.indexOf(filter);
                this.filters.splice(index, 1);
                return false;
            }

          // otherwise update the value
            filter.value = value;
            return false;
        }


                // make a new filter object with the fields used in the form
        let fieldProp;
        if (this.fields.length) {
            fieldProp = this.fields.filter((field) => {
                return field.name === fieldName;
            })[0];
        }

      // if no filter exists create it
        this.filters.push(new Filter({
            name: fieldName,
            value: value,
            operator: 'equals',
            field: fieldProp
        }));
        return false;
    },
    getQuickFilter (fieldName, value) {
        const filter = this.filters.filter((f) => {
            return f.name === fieldName && f.value === value;
        });
        return filter[0];
    }
});

export default Component.extend({
    tag: 'search-control',
    ViewModel: ViewModel,
    view: template
});

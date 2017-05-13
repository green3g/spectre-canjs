import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';
import template from './search-control.stache';
import './search-control.less';

import {FilterList} from '~/filter-widget/Filter';
import '~/filter-widget/filter-widget';
import '~/dropdown-menu/dropdown-menu';

export const ViewModel = DefineMap.extend({
    filters: FilterList,
    fields: DefineList,
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

      // if no filter exists create it
        this.filters.push({
            name: fieldName,
            value: value,
            operator: 'equals'
        });
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

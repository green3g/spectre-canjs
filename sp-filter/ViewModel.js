import DefineMap from 'can-define/map/map';
import Filter from '../sp-filter-builder/Filter';
import canEvent from 'can-event';

/**
 * A `<sp-filter />` component's ViewModel
 * 
 * @class ViewModel
 * @memberof sp-filter
 */
const ViewModel = DefineMap.extend('SPFilter', {
    /** @lends sp-filter.ViewModel.prototype */
    /**
     * The filter object to modify 
     * @type {FilterObject} 
     * @instance
     * @memberof sp-filter.ViewModel
     */
    filter: Filter,
    /**
     * A no operation function 
     * @instance
     * @memberof sp-filter.ViewModel
     * @param {Event} event the event to preventDefault on
     * @return {False} return false to prevent page navigation from occuring
     */
    noOp (event) {
        event.preventDefault();
        return false;
    },
    /**
     * Dispatches an event with the filter object
     * @instance
     * @memberof sp-filter.ViewModel
     * @param {String} event The event name to dispatch 
     */
    dispatchEvent (event) {
        this.dispatch(event, [this.filter]);
    }
});

Object.assign(ViewModel.prototype, canEvent);

export default ViewModel;
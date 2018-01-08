import DefineMap from 'can-define/map/map';
import Filter from '../sp-filter-builder/Filter';
import canEvent from 'can-event';

const ViewModel = DefineMap.extend('SPFilter', {
    filter: Filter,
    noOp (event) {
        event.preventDefault();
        return false;
    },
    dispatchEvent (event) {
        this.dispatch(event, [this.filter]);
    }
});

Object.assign(ViewModel.prototype, canEvent);

export default ViewModel;
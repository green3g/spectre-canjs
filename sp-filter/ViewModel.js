import DefineMap from 'can-define/map/map';
import Filter from '../sp-filter-builder/Filter';
import canEvent from 'can-event';

const ViewModel = DefineMap.extend('SPFilter', {
    filter: Filter
});

Object.assign(ViewModel.prototype, canEvent);

export default ViewModel;
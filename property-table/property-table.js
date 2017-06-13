import template from './property-table.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'property-table',
    ViewModel: ViewModel,
    view: template
});

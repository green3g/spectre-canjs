import template from './sp-property-table.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-property-table',
    ViewModel: ViewModel,
    view: template
});

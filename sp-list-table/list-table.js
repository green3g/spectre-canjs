import template from './list-table.stache';
import './list-table.less!';
import Component from 'can-component';
import ViewModel from './ViewModel';
import '../dropdown-menu/dropdown-menu';


export default Component.extend({
    tag: 'list-table',
    ViewModel: ViewModel,
    view: template
});

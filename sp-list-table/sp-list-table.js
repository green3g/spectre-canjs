import template from './sp-list-table.stache';
import './sp-list-table.less';
import Component from 'can-component';
import ViewModel from './ViewModel';
import '../sp-dropdown/sp-dropdown';


export default Component.extend({
    tag: 'sp-list-table',
    ViewModel: ViewModel,
    view: template
});

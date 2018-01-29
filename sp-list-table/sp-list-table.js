import template from './sp-list-table.stache';
import './sp-list-table.less';
import Component from 'can-component';
import ViewModel from './ViewModel';
import '../sp-dropdown/sp-dropdown';


/**
 * A table to hold an array of objects - one object per row
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-list-table
 * @example 
 * <sp-list-table /> 
 */
export default Component.extend({
    tag: 'sp-list-table',
    ViewModel: ViewModel,
    view: template
});

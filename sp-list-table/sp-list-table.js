import template from './sp-list-table.stache';
import './sp-list-table.less';
import Component from 'can-component';
import ViewModel from './ViewModel';
import '../sp-dropdown/sp-dropdown';
import 'can-dom-data';


/**
 * A table to hold an array of objects - one object per row
 * <iframe src="../sp-list-table/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
 * @module sp-list-table
 * @example 
 * <sp-list-table fields:from="fields" objects:from="objects" /> 
 * {
 *  fields: ['field_name', {
 *      name: 'other_name',
 *      displayComponent: '<strong>{{object[field.name]}}</strong>
 *  }]
 * }
 */
export default Component.extend({
    tag: 'sp-list-table',
    ViewModel: ViewModel,
    view: template
});

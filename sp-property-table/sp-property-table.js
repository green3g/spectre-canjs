import template from './sp-property-table.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A two column table for displaying Field:value object pairs
 * <iframe src="../sp-property-table/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
 * @module sp-property-table
 * @example 
 * <sp-property-table /> 
 */
export default Component.extend({
    tag: 'sp-property-table',
    ViewModel: ViewModel,
    view: template
});

import template from './sp-property-table.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A two column table for displaying Field:value object pairs
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-property-table
 * @example 
 * <sp-property-table /> 
 */
export default Component.extend({
    tag: 'sp-property-table',
    ViewModel: ViewModel,
    view: template
});

import Component from 'can-component';
import ViewModel from './ViewModel';
import view from './template.stache';

/**
 * A filter component for creating complex filters
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-filter
 * @example 
 * <sp-filter /> 
 */
export default Component.extend({
    tag: 'sp-filter',
    ViewModel,
    view
});
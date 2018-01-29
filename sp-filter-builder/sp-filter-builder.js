import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache';
import './sp-filter-builder.less';
import '../sp-list-table/sp-list-table';
import '../sp-form/sp-form';
import '../sp-filter/sp-filter';
import '../sp-form/fields/sp-text-field/sp-text-field';
import '../sp-form/fields/sp-select-field/sp-select-field';

/**
 * A component for allowing users to create complex filters
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-filter-builder
 * @example 
 * <sp-filter-builder /> 
 */
export default Component.extend({
    tag: 'sp-filter-builder',
    ViewModel: ViewModel,
    view: template
});

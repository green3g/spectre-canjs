import Component from 'can-component';
import template from './template.stache';
import './sp-paginate.less';
import ViewModel from './ViewModel';

/**
 * A paginate ui component
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-paginate
 * @example 
 * <sp-paginate /> 
 */
export default Component.extend({
    tag: 'sp-paginate',
    ViewModel: ViewModel,
    view: template
});

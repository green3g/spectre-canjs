import './sp-dropdown.less';
import template from './template.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * Inserts a dropdown toggle button into the page. Consider using spectre.css css-only dropdowns instead
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @class sp-dropdown
 * @deprecated 
 * @example 
 * <sp-dropdown />
 * 
 */
export default Component.extend({
    tag: 'sp-dropdown',
    view: template,
    ViewModel: ViewModel
});

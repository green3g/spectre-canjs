import Component from 'can-component';
import template from './template.stache';
import ViewModel from './ViewModel';
import './widget.less';

/**
 * A form component useful for validation, data updating, and dirty checking
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @class sp-form
 * @deprecated 
 * @example 
 * <sp-dropdown />
 */
export default Component.extend({
    tag: 'sp-form',
    ViewModel: ViewModel,
    view: template
});

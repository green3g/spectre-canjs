import Component from 'can-component';
import template from './template.stache';
import ViewModel from './ViewModel';
import './widget.less';

/**
 * A form component useful for validation, data updating, and dirty checking
 * <iframe src="../sp-form/demo/basic/basic.html" style="border: 1px solid #ccc; width:33%; height:300px;"></iframe>
 * <iframe src="../sp-form/demo/full/full.html" style="border: 1px solid #ccc; width:66%; height:300px;"></iframe>
 * @class sp-form
 * @example 
 * <sp-form />
 */
export default Component.extend({
    tag: 'sp-form',
    ViewModel: ViewModel,
    view: template
});

import Component from 'can-component';
import template from './sp-modal.stache';
import './sp-modal.less';
import ViewModel from './ViewModel';

/**
 * A modal dialog
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-modal
 * @example 
 * <sp-modal /> 
 */
Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'sp-modal'
});

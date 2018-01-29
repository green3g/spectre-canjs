import Component from 'can-component';
import template from './sp-tab-container.stache';
import './sp-tab-container.less';
import ViewModel from './ViewModel';

/**
 * A navigation container for navigating between tabbed pages
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @class sp-tab-container
 * @example 
 * <sp-tab-container />
 */
export default Component.extend({
    tag: 'sp-tab-container',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

import Component from 'can-component';
import template from './sp-tab-container.stache';
import './sp-tab-container.less';
import ViewModel from './ViewModel';

/**
 * A navigation container for navigating between tabbed pages
 * <iframe src="../sp-tab-container/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
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

import Component from 'can-component';
import './sp-file-list.less';
import view from './sp-file-list.stache';
import ViewModel from './ViewModel';

/**
 * A formatted list of files with slots for actions. 
 * Images are displayed if available.
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-file-list
 * @example 
 * <sp-file-list /> 
 */
export default Component.extend({
    tag: 'sp-file-list',
    ViewModel,
    view
});

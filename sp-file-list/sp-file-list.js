import Component from 'can-component';
import './sp-file-list.less';
import view from './sp-file-list.stache';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-file-list',
    ViewModel,
    view
});

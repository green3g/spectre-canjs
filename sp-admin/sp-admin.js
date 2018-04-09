import Component from 'can-component';
import './sp-admin.less';
import view from './sp-admin.stache';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-admin',
    ViewModel,
    view
});

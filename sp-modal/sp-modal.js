import Component from 'can-component';
import template from './sp-modal.stache';
import './sp-modal.less';
import ViewModel from './ViewModel';

Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'sp-modal'
});

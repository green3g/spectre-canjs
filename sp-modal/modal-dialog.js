import Component from 'can-component';
import template from './modal-dialog.stache';
import './modal-dialog.less';
import ViewModel from './ViewModel';

Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'modal-dialog'
});

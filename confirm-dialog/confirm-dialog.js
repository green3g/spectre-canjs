import template from './confirm-dialog.stache!';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'confirm-dialog',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

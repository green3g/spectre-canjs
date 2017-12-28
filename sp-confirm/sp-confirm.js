import template from './sp-confirm.stache!';
import Component from 'can-component';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-confirm',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

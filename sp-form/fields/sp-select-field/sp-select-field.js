import Component from 'can-component';
import template from './sp-select-field.stache';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-select-field',
    view: template,
    ViewModel: ViewModel
});

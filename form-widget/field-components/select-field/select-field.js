import Component from 'can-component';
import template from './select-field.stache';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'select-field',
    view: template,
    ViewModel: ViewModel
});


import Component from 'can-component';
import template from './sp-text-field.stache!';
import ViewModel from './ViewModel';


export default Component.extend({
    tag: 'sp-text-field',
    view: template,
    ViewModel: ViewModel
});

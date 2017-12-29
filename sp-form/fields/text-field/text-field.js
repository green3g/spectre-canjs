
import Component from 'can-component';
import template from './text-field.stache!';
import ViewModel from './ViewModel';


export default Component.extend({
    tag: 'text-field',
    view: template,
    ViewModel: ViewModel
});

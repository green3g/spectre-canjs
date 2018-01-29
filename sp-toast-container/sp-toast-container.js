import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './sp-toast-container.stache';

Component.extend({
    tag: 'sp-toast-container',
    ViewModel: ViewModel,
    view: template
});

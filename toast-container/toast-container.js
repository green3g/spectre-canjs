import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './toast-container.stache!';

Component.extend({
    tag: 'toast-container',
    ViewModel: ViewModel,
    view: template
});

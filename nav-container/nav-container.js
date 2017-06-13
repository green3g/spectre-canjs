import Component from 'can-component';
import template from './nav-container.stache!';
import './nav-container.less!';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'nav-container',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

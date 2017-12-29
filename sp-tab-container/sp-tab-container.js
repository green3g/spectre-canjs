import Component from 'can-component';
import template from './sp-tab-container.stache!';
import './sp-tab-container.less!';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-tab-container',
    ViewModel: ViewModel,
    view: template,
    leakScope: true
});

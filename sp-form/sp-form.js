import Component from 'can-component';
import template from './template.stache!';
import ViewModel from './ViewModel';
import './widget.less!';

export default Component.extend({
    tag: 'sp-form',
    ViewModel: ViewModel,
    view: template
});

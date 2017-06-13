import Component from 'can-component';
import template from './template.stache!';
import './paginate-widget.less!';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'paginate-widget',
    ViewModel: ViewModel,
    view: template
});

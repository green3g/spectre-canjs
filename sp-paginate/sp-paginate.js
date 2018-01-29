import Component from 'can-component';
import template from './template.stache';
import './sp-paginate.less';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-paginate',
    ViewModel: ViewModel,
    view: template
});

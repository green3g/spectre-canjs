import Component from 'can-component';
import ViewModel from './ViewModel';
import view from './template.stache';

export default Component.extend({
    tag: 'sp-filter',
    ViewModel,
    view
});
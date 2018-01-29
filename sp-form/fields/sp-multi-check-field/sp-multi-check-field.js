import 'spectre-canjs/sp-form/fields/sp-check-field/sp-check-field';
import 'can-stache-converters';
import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache';
import './sp-multi-check-field.less';

export default Component.extend({
    tag: 'sp-multi-check-field',
    ViewModel: ViewModel,
    view: template
});

import 'spectre-canjs/form-widget/field-components/checkbox-field/checkbox-field';
import 'can-stache-converters';
import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache';
import './checkbox-multi.less';

export default Component.extend({
    tag: 'checkbox-multi',
    ViewModel: ViewModel,
    view: template
});

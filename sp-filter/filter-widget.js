import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache!';
import './filter-widget.less!';
import '../list-table/list-table';
import '../form-widget/form-widget';
import '../form-widget/field-text-field/text-field';
import '../form-widget/field-select-field/select-field';

export default Component.extend({
    tag: 'filter-widget',
    ViewModel: ViewModel,
    view: template
});

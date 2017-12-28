import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './template.stache!';
import './sp-filter-builder.less!';
import '../sp-list-table/sp-list-table';
import '../sp-form/sp-form';
import '../sp-filter/sp-filter';
import '../sp-form/fields/text-field/text-field';
import '../sp-form/fields/select-field/select-field';

export default Component.extend({
    tag: 'sp-filter-builder',
    ViewModel: ViewModel,
    view: template
});

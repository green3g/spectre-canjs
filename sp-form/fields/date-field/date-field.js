import ViewModel from './ViewModel';
import Component from 'can-component';

import '../select-field/select-field';

import template from './date-field.stache!';
import './date-field.less!';


export default Component.extend({
    tag: 'date-field',
    view: template,
    ViewModel: ViewModel
});

import ViewModel from './ViewModel';
import Component from 'can-component';

import '../sp-select-field/sp-select-field';

import template from './sp-date-field.stache!';
import './sp-date-field.less!';


export default Component.extend({
    tag: 'sp-date-field',
    view: template,
    ViewModel: ViewModel
});

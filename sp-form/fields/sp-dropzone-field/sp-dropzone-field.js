import Component from 'can-component';
import './sp-dropzone-field.less';
import view from './sp-dropzone-field.stache';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/basic.css';
import ViewModel from './ViewModel';

export default Component.extend({
    tag: 'sp-dropzone-field',
    ViewModel,
    view
});

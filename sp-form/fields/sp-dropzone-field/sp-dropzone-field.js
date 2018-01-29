import Component from 'can-component';
import './sp-dropzone-field.less';
import view from './sp-dropzone-field.stache';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/basic.css';
import ViewModel from './ViewModel';


/**
 * A file upload field using dropzone
 * @see http://www.dropzonejs.com/
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-dropzone-field
 * @example 
 * <sp-dropzone-field /> 
 */
export default Component.extend({
    tag: 'sp-dropzone-field',
    ViewModel,
    view
});

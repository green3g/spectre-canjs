import Component from 'can-component';
import './sp-dropzone-field.less';
import view from './sp-dropzone-field.stache';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/basic.css';
import ViewModel from './ViewModel';


/**
 * A file upload field using dropzone. See {@link http://www.dropzonejs.com/}
 * @module sp-dropzone-field
 * @example 
 * <sp-dropzone-field /> 
 */
export default Component.extend({
    tag: 'sp-dropzone-field',
    ViewModel,
    view
});

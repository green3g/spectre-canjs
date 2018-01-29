
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const img = new RegExp(/.*\.(?:jpg|jpeg|gif|png)/, 'i');

/**
 * A `<sp-file-list />` component's ViewModel
 * 
 * @class ViewModel
 * @memberof sp-file-list
 */
export const ViewModel = DefineMap.extend({
    /** @lends sp-file-list.ViewModel.prototype */
    /**
     * A list of file objects
     * @memberof sp-file-list.ViewModel.prototype
     * @type {DefineList}
     */
    files: DefineList,
    /**
     * Tests a file objects `id` property for image type extension
     * @memberof sp-file-list.ViewModel.prototype
     * @param {FileObject} file The file object
     * @return {Boolean} whether or not the `file.id` name is a file
     */
    isImage (file) {
        return img.test(file.id);
    }
});

import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const img = new RegExp(/.*\.(?:jpg|jpeg|gif|png)/, 'i');

export const ViewModel = DefineMap.extend({
    files: DefineList,
    isImage (file) {
        return img.test(file.id);
    }
});
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './sp-file-list.less';
import view from './sp-file-list.stache';

const img = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|jpeg|gif|png)/;

export const ViewModel = DefineMap.extend({
  files: DefineList,
  isImage(file){
    return img.test(file.id);
  },
});

export default Component.extend({
  tag: 'sp-file-list',
  ViewModel,
  view
});

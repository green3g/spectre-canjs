import DefineList from 'can-define/list/list';
import ViewModel from './ViewModel';

/**
 * An extended DefineList with type set to a nav page ViewModel
 * @constructor nav-page/PageList PageList
 * @parent nav-page
 */
export const PageList = DefineList.extend('NavPageList', {
    '#': ViewModel
});

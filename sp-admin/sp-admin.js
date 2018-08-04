import Component from 'can-component';
import './sp-admin.less';
import view from './sp-admin.stache';
import ViewModel from './ViewModel';
import '../sp-list-table/sp-list-table';
import '../sp-property-table/sp-property-table';
import '../sp-modal/sp-modal';
import '../sp-form/sp-form';
import '../sp-toast/sp-toast';
import '../sp-form/fields/sp-text-field/sp-text-field';
import '../sp-filter-builder/sp-filter-builder';
import './sp-paginate-footer/sp-paginate-footer';
import './sp-filter-dropdown/sp-filter-dropdown';

export default Component.extend({
    tag: 'sp-admin',
    ViewModel,
    view
});

import Component from 'can-component';
import template from './sp-paginate-footer.stache';
import './sp-paginate-footer.less';
import ViewModel from './ViewModel';
import 'spectre-canjs/sp-paginate/';

export default Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'sp-admin-paginate'
});

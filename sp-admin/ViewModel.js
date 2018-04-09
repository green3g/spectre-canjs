
import DefineMap from 'can-define/map/';
import edit from './mixins/edit';
import list from './mixins/list';
import search from './mixins/search';
import paginate from './mixins/paginate';
import details from './mixins/details';

export default DefineMap.extend('AdminViewModel', {seal: false}, Object.assign({}, edit, list, search, paginate, details));

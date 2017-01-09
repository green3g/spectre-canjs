import 'dropdown-menu/';

import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

var render = stache.from('demo-html');

var viewModel = new DefineMap({
    pages: [{
        label: 'List'
    }, {
        label: 'Create',
        active: true
    }, {
        label: 'Other Options'
    }]
});

document.body.appendChild(render(viewModel));

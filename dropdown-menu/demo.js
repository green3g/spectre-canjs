import 'font-awesome/css/font-awesome.css';
import 'spectre.css/dist/spectre.css';
import 'dropdown-menu/';

import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

var render = stache(document.getElementById('demo-html').innerHTML);

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

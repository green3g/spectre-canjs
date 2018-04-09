import 'spectre-canjs/sp-tab-container/sp-tab-container';
import 'spectre-canjs/sp-tab-page/sp-tab-page';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import ajax from 'axios';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    people: ajax.get( 'http://jsonplaceholder.typicode.com/users').then(result => {
            return result.data;
    }),
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

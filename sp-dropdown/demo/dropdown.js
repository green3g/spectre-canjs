import 'spectre-canjs/dropdown-menu/dropdown-menu';
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
    }],
    primary: [{
      text: 'Important!'
    }]
});

document.body.appendChild(render(viewModel));
 window.DEMO_SOURCE = `
 import 'spectre-canjs/dropdown-menu/dropdown-menu';
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
     }],
     primary: [{
       text: 'Important!'
     }]
 });

 document.body.appendChild(render(viewModel));
 `;

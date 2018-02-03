import 'spectre-canjs/sp-property-table/sp-property-table';
import stache from 'can-stache';
import nameTemplate from './templates/name.stache';
import date from './templates/date.stache';
import DefineMap from 'can-define/map/map';

var render = stache.from('demo-html');

var viewModel = new DefineMap({
    fields: [{
        //fields can be specified using a detailed object
        name: 'name',
        alias: 'User name',

        // custom templates can customize the look of the value
        displayComponent: nameTemplate
    }, {
        name: 'birthday',

        // increment the month number
        incrementMonth(number){
            return number + 1;
        },
        displayComponent: date
    },
        //or a simple field name
        'favorite_food'
    ],
    myData: {
        name: 'James McMannus',
        birthday: new Date,
        favorite_food: 'Pizza'
    }
});

document.body.appendChild(render(viewModel));

window.DEMO_SOURCE = `
import 'spectre-canjs/sp-property-table/sp-property-table';
import stache from 'can-stache';
import prop1Template from './templates/prop1.stache';

var render = stache.from('demo-html');

var viewModel = {
    fields: [{
        //fields can be specified using a detailed object
        name: 'prop_1',
        alias: 'Property 1',

        // custom templates can customize the look of the value
        displayComponent: prop1Template
    },
        //or a simple field name
        'another_property_value', 'etc_or_misc'
    ],
    data: {
        prop_1: 'This is a property',
        another_property_value: 'Value here',
        etc_or_misc: 'This is a value'
    }
};

document.body.appendChild(render(viewModel));
`

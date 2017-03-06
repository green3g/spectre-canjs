import 'spectre-canjs/property-table/property-table';
import stache from 'can-stache';

var render = stache.from('demo-html');

var viewModel = {
    fields: [{
        //fields can be specified using a detailed object
        name: 'prop_1',
        alias: 'Property 1',
        // formatters can customize the look of the value
        formatter (prop) {
            return `<strong>${prop}</strong>`;
        }
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

window.DEMO_SOURCE = `
import 'spectre-canjs/property-table/property-table';
import stache from 'can-stache';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = {
    fields: [{
            //fields can be specified using a detailed object
        name: 'prop_1',
        alias: 'Property 1',
            // formatters can customize the look of the value
        formatter (prop) {
            return <strong>' + prop + '</strong>;
        }
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

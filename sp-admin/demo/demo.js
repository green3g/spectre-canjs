import 'can-debug';
import {Connection} from '../../test/data/connection';
import Component from 'can-component';
import view from './demo.stache';
import '../../sp-admin/sp-admin';

Component.extend({
    tag: 'can-admin-app',
    viewModel: {
        props: {
            model: Connection,
            searchFields: ['description'],
            filterFields: [{
                name: 'name',
                options: [{value: 'Trash'}, {value: 'Cat'}]
            }]
        }
    },
    view
});
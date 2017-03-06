import 'spectre-canjs/data-admin/data-admin';
import SuperMap from 'can-connect/can/super-map/';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import stache from 'can-stache';

import '../../form-widget/field-components/checkbox-field/checkbox-field';

// additional field proeprties can be included here to customize the
// tables and forms for this object
const PostMap = DefineMap.extend({
    'id': {
        type: 'number',
        excludeForm: true
    },
    userId: 'number',
    title: 'string',
    body: 'string',
    completed: { fieldType: 'checkbox', type: 'boolean' }
});

const PostList = DefineList.extend({
    map: PostMap
});

const Connection = SuperMap({
    idProp: 'id',
    Map: PostMap,
    List: PostList,
    url: 'https://jsonplaceholder.typicode.com/posts',
    name: 'post',
    metadata: {
        // total: data.length
    }
});

const viewModel = new DefineMap({
    view: {
        quickFilters: [{
            text: 'User ID...',
            field: 'userId',
            options: [{
                label: 'One',
                value: 1
            }, {
                label: 'Two',
                value: 2
            }]
        }],
        title: 'Posts',
        connection: Connection,
        manageButtons: [{
            header: 'Quick Tasks',
            text: 'Complete',
            iconClass: 'fa fa-fw fa-check-square-o',
            onClick(objs) {
                if (!objs.length) {
                    objs = [objs];
                }
                objs.forEach((obj) => {
                    obj.completed = true;
                    Connection.save(obj);
                });
            }
        }]
    },
    params: {},
    getParameters() {
        return JSON.stringify(this.params.serialize());
    }
});


const frag = stache.from('demo-html')(viewModel);

document.body.appendChild(frag);

// set demo source code
window.DEMO_SOURCE = `
import 'spectre-canjs/data-admin/data-admin';
import SuperMap from 'can-connect/can/super-map/';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import stache from 'can-stache';

import '../../form-widget/field-components/checkbox-field/checkbox-field';

// additional field proeprties can be included here to customize the
// tables and forms for this object
const PostMap = DefineMap.extend({
    'id': {
        type: 'number',
        excludeForm: true
    },
    userId: 'number',
    title: 'string',
    body: 'string',
    completed: { fieldType: 'checkbox', type: 'boolean' }
});

const PostList = DefineList.extend({
    map: PostMap
});

const Connection = SuperMap({
    idProp: 'id',
    Map: PostMap,
    List: PostList,
    url: 'https://jsonplaceholder.typicode.com/posts',
    name: 'post',
    metadata: {
        // total: data.length
    }
});

const viewModel = new DefineMap({
    view: {
        quickFilters: [{
            text: 'User ID...',
            field: 'userId',
            options: [{
                label: 'One',
                value: 1
            }, {
                label: 'Two',
                value: 2
            }]
        }],
        title: 'Posts',
        connection: Connection,
        manageButtons: [{
            header: 'Quick Tasks',
            text: 'Complete',
            iconClass: 'fa fa-fw fa-check-square-o',
            onClick(objs) {
                if (!objs.length) {
                    objs = [objs];
                }
                objs.forEach((obj) => {
                    obj.completed = true;
                    Connection.save(obj);
                });
            }
        }]
    },
    params: {},
    getParameters() {
        return JSON.stringify(this.params.serialize());
    }
});


const frag = stache.from('demo-html')(viewModel);

document.body.appendChild(frag);
`;

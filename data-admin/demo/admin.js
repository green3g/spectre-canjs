import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import stache from 'can-stache';

import base from 'spectre-canjs/util/behaviors/base';

// import transformParameters from 'spectre-canjs/util/behaviors/transformParameters';
import totalResourceCount from 'spectre-canjs/util/behaviors/totalResourceCount';

import 'spectre-canjs/data-admin/data-admin';
import 'spectre-canjs/form-widget/field-components/checkbox-field/checkbox-field';

// get a fake rest api
import 'spectre-canjs/test/data/fixtures';

export const TaskMap = DefineMap.extend('Task', {
    seal: false
}, {
    'name': 'string',
    'description': 'string',
    completed: {
      type: 'boolean',
      fieldType: 'checkbox',
      value: false,
      displayTemplate: stache('{{#if object.completed}}Yes{{else}}No{{/if}}')
    }
});

export const TaskList = DefineList.extend({
    map: TaskMap
});

const Connection = base({
  // transform spectre-canjs parameters to our servers parameters if needed
  //behaviors:  [
  //transformParameters
  //],
    idProp: 'id',
    Map: TaskMap,
    List: TaskList,
    url: '/tasks',
    name: 'task'
});

const viewModel = new DefineMap({
    view: {
        titleProp: 'name',
        quickFilters: [{
            text: 'Completed',
            field: 'completed',
            options: [{
                label: 'Yes',
                value: 'true'
            }, {
                label: 'No',
                value: 'false'
            }]
        }],
        title: 'Tasks',
        connection: Connection,
        actions: [{
            tooltip: 'Mark this task complete',
            header: 'Quick Tasks',
            text: 'Complete',
            iconClass: 'fa fa-fw fa-check-square-o',
            onClick(objs) {
                if (!objs.length) {
                    objs = [objs];
                }
                const promises = [];
                objs.forEach((obj) => {
                    obj.completed = true;
                    promises.push(Connection.save(obj));
                });
                return Promise.all(promises);
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
        edit: false
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
        actions: [{
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

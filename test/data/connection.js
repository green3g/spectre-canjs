import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import realtimeRestModel from 'can-super-model';

// import fake ajax services
import './fixtures';

export const TaskMap = DefineMap.extend('Task', {seal: false}, {
    id: {type: 'number', identity: true, edit: 'false'},
    'name': 'string',
    'description': 'string',
    edit: {
        edit: false,
        serialize: false, 
        displayComponent: `
            <button class="btn btn-link" type="button" on:click="scope.root.dispatchEvent('edit', ../object)">
            <i class="fa fa-pencil"></i></button>
        `
    }
});

export const TaskList = DefineList.extend({
    '#': TaskMap
});

TaskMap.List = TaskList;

const C = realtimeRestModel({
    Map: TaskMap,
    url: '/tasks'
});

C.metadata = {};

export const Connection = C;

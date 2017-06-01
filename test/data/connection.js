import superMap from 'can-connect/can/super-map/';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

// import fake ajax services
import './fixtures';

export const TaskMap = DefineMap.extend('Task', {seal: false}, {
    'name': 'string',
    'description': 'string'
});

export const TaskList = DefineList.extend({
    '#': TaskMap
});

const C = superMap({
    idProp: 'id',
    Map: TaskMap,
    List: TaskList,
    url: '/tasks',
    name: 'task'
});

C.metadata = {};

export const Connection = C;

import 'spectre-canjs/sp-filter-builder/sp-filter-builder';
import stache from 'can-stache';
import parseFieldArray from 'spectre-canjs/util/field/parseFieldArray/parseFieldArray';
import DefineMap from 'can-define/map/map';

const render = stache.from('demo-html');
document.body.appendChild(render(new DefineMap({
    fields: parseFieldArray(['field_1', 'field_2', 'field_3', { filter: false, name: 'excluded'}]),
    disableCreate: false,
    stringify (filters) {
        return JSON.stringify(filters.serialize());
    },
    toggleAdd () {
        this.disableCreate = !this.disableCreate;
    },
    pin(filters){
      filters.forEach(filter => {
        filter.pinned = !filter.pinned;
      });
    },
    hide(filters){
      filters.forEach(filter => {
        filter.visible = !filter.visible;
      });
    }
})));


window.DEMO_SOURCE = `
import 'sp-filter-builder/';
import stache from 'can-stache';
import {parseFieldArray} from '~/util/field/field';
import DefineMap from 'can-define/map/map';

const render = stache.from('demo-html');
document.body.appendChild(render(new DefineMap({
    fields: parseFieldArray(['field_1', 'field_2', 'field_3']),
    disableCreate: false,
    stringify (data) {
        return JSON.stringify(data.serialize());
    },
    toggleAdd () {
        this.disableCreate = !this.disableCreate;
    }
})));
`;

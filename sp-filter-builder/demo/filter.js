import 'spectre-canjs/sp-filter-builder/sp-filter-builder';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import jsonMarkup from 'json-pretty-html';
import '../../sp-form/demo/full/full.less';
import 'spectre-canjs/sp-form/fields/sp-check-field/sp-check-field';

const render = stache.from('demo-html');
document.body.appendChild(render(new DefineMap({
    filters: [],
    fields: [{name: 'field_1', type: 'number', textType: 'number'}, 'field_2', {
        name: 'field_3',
        editTag: 'sp-check-field',
        type: 'boolean'
    }, { filter: false, name: 'excluded'}, {
        name: 'field_4',
        editTag: 'sp-select-field',
        options: [{
            value: 'Option 1',
        }, {
            value: 'Option 2'
        }]
    }],
    disableCreate: false,
    stringify (filters) {
        if(filters){
            filters.get('length');
        }
        return jsonMarkup(filters.get());
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

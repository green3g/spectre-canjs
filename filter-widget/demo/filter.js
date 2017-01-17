import 'filter-widget/';
import stache from 'can-stache';
import {parseFieldArray} from 'spectre-canjs/util/field';
import DefineMap from 'can-define/map/map';

const render = stache.from('demo-html');
document.body.appendChild(render(new DefineMap({
    fields: parseFieldArray(['field_1', 'field_2', 'field_3']),
    disableAdd: false,
    stringify (data) {
        return JSON.stringify(data.serialize());
    },
    toggleAdd () {
        this.disableAdd = !this.disableAdd;
    }
})));

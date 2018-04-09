import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './sp-filter-dropdown.less';
import view from './sp-filter-dropdown.stache';
import Field from 'spectre-canjs/sp-form/fields/sp-select-field/ViewModel';

export const ViewModel = DefineMap.extend({
    params: {
        set (params) {
            if (params) {
                this.oldSearch = params.get();
            }
            return params;
        }
    },
    oldSearch: DefineMap,
    field: Field,
    setFilter (value, event) {
        if (event) {
            event.preventDefault();
        }

        const search = this.params.get() || {};
        if (value !== search[this.field.name]) {
            search[this.field.name] = value;
        } else if (value !== this.oldSearch[this.field.name]) {
            search[this.field.name] = this.oldSearch[this.field.name];
        } else {
            delete search[this.field.name];
        }

        this.params.update(search);

        return false;
    }
});

export default Component.extend({
    tag: 'sp-filter-dropdown',
    ViewModel,
    view
});

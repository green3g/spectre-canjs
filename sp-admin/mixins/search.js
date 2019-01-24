import DefineMap from 'can-define/map/map';

// search functionality for the admin component
export default {
    // required
    searchFields: {
        default () {
            return [];
        }
    },
    filterFields: {
        default () {
            return [];
        }
    },

    // internal
    searchFieldProps: {
        default () {
            return {
                showClear: true,
                name: 'search',
                inline: true,
                placeholder: 'Search',
                alias: ''
            };
        }
    },
    _originalFilters: {},
    searchValue: 'string',

    // logic to add and restore search props
    search ([searchVal]) {
        let filters = this.params.filters.$or ? this.params.filters.$or.get() : {};
        if (searchVal) {
            if (!this._originalFilters) {
                this._originalFilters = new DefineMap(filters);
            }
            this.searchFields.forEach((field) => {
                filters[field] = searchVal; 
            });
        } else {
            filters = this._originalFilters ? this._originalFilters.get() : {};
        }
        this.params.filters.assign({$or: filters});
    }
};

import DefineMap from 'can-define/map/';

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
                alias: 'Search'
            };
        }
    },
    _originalSearchProps: {},
    searchValue: 'string',

    // logic to add and restore search props
    search ([searchVal]) {
        let updates;
        if (searchVal) {
            if (!this._originalSearchProps) {
                this._originalSearchProps = new DefineMap(this.params.get());
            }
            updates = Object.assign(this.params.get(), {
                $or: this.searchFields.map((f) => {
                    const obj = {
                        [f]: {
                            $like: `%${searchVal}%`
                        }
                    };
                    return obj;
                })
            });
        } else {
            updates = this._originalSearchProps ? this._originalSearchProps.get() : {};
        }
        this.params.update(updates);
    }
};

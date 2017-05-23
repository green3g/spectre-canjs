import data from './tasks.json';
import fixture from 'can-fixture';
import DefineList from 'can-define/list/list';
import assign from 'object-assign';
import dev from 'can-util/js/dev/dev';

let index = 1000;

// a mock ajax service
fixture.delay = 200;
fixture({
    'GET /tasks' (params) {
        const perPage = params.data.perPage || 10;
        const page = params.data.page || 0;
        const sortInfo = params.data.sort;
        let totalItems = data.length;
        let tempData = new DefineList(data);

        // filter it
        if (params.data.filters && params.data.filters.length) {
            // lets just handle one filter for testing
            dev.warn('only the first filter is going to be used!');
            const f = params.data.filters[0];
            const exclusions = [null, '', undefined];
            if (exclusions.indexOf(f.value === -1)) {
                switch (f.operator) {
                case 'equals':
                    tempData = tempData.filter((d) => {
                    //eslint-disable-next-line
                    return d[f.name] == f.value;
                    });
                    break;
                default:
                    if (f.operator !== 'like') {
                        dev.warn(f.operator, 'operator not implemented in fixture, like will be used instead!');
                    }
                    if (typeof f.value !== 'string') {
                        dev.warn('ignoring filter on non-string value');
                    } else {
                        tempData = tempData.filter((d) => {
                            return d[f.name].toUpperCase().indexOf(f.value.toUpperCase()) !== -1;
                        });
                    }
                }
                dev.warn('found ' + tempData.length + ' items after filtering');
                totalItems = tempData.length;
            }
        }


        // sort it
        if (sortInfo && sortInfo.field) {
            const field = sortInfo.field;
            tempData = tempData.sort((a, b) => {
                return sortInfo.type === 'asc' ? (a[field] === b[field] ? 0 : a[field] > b[field] ? 1 : -1) : (a[field] === b[field] ? 0 : a[field] > b[field] ? -1 : 1);
            });
        }

        // pageinate it
        tempData = tempData.slice(page * perPage, (page + 1) * perPage);

        // return the serialized version
        return {
            data: tempData.serialize(),
            total: totalItems
        };
    },
    'POST /tasks' (params, response) {
        const newId = index++;
        const newObj = assign({
            id: newId
        }, params.data);
        data.push(newObj);
        response(data[data.length - 1]);
    },
    'GET /tasks/{id}' (params, response) {
        const items = data.filter((item) => {
            // eslint-disable-next-line eqeqeq
            return item.id == params.data.id;
        });
        if (!items.length) {
            response(404, 'Not Found');
            return null;
        }
        return items[0];
    },
    'PUT /tasks/{id}' (params, response) {
        let item = data.filter((i) => {
            // eslint-disable-next-line eqeqeq
            return i.id == params.data.id;
        });
        if (!item.length) {
            response(404, 'Not Found');
            return;
        }
        item = item[0];
        const idx = data.indexOf(item);
        if (idx !== -1) {
            data[idx] = assign(item, params.data);
            response(data);
        } else {
            response(404, 'Not Found');
        }
    },
    'DELETE /tasks/{id}' (params, response) {
        let item = data.filter((i) => {
            // eslint-disable-next-line eqeqeq
            return i.id == params.data.id;
        });
        if (!item.length) {
            response(404, 'Not Found');
            return;
        }
        item = item[0];
        const idx = data.indexOf(item);
        if (idx !== -1) {
            data.splice(data.indexOf(item), 1);
            response(data);
        } else {
            response(404, 'Not Found');
        }
    }
});

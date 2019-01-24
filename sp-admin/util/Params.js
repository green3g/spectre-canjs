import DefineMap from 'can-define/map/map';

export const Page = DefineMap.extend('PageQuery', {
    start: 'number',
    end: 'number'
});

export default DefineMap.extend('Query', {
    filter: {Type: DefineMap, Default: DefineMap},
    sort: 'string',
    page: {Type: Page, Default: Page}
});
var stealTools = require('steal-tools');
var path = require('path');

stealTools.build({
    main: 'docs-main',
    config: path.join(__dirname, 'package.json!npm'),
    bundle: [
        'spectre-canjs/sp-dropdown/demo/dropdown',
        'spectre-canjs/sp-filter-builder/demo/filter',
        'spectre-canjs/sp-form/demo/form',
        'spectre-canjs/sp-list-table/demo/listTable',
        'spectre-canjs/sp-modal/demo/dialog',
        'spectre-canjs/sp-tab-container/demo/nav',
        'spectre-canjs/sp-paginate/demo/paginate',
        'spectre-canjs/sp-property-table/demo/propertyTable',
        'spectre-canjs/sp-toast-container/demo/toast'
    ]
}, {
    removeDevelopmentCode: false,
    bundleSteal: false,
    bundleAssets: true,
    sourceMaps: true,
    dest: 'docs/spectre'
});

var stealTools = require('steal-tools');
var path = require('path');

stealTools.build({
    main: 'docs-main',
    config: path.join(__dirname, 'package.json!npm'),
    bundle: [
        'spectre-canjs/data-admin/demo/admin',
        'spectre-canjs/dropdown-menu/demo/dropdown',
        'spectre-canjs/filter-widget/demo/filter',
        'spectre-canjs/form-widget/demo/form',
        'spectre-canjs/list-table/demo/listTable',
        'spectre-canjs/modal-dialog/demo/dialog',
        'spectre-canjs/nav-container/demo/nav',
        'spectre-canjs/paginate-widget/demo/paginate',
        'spectre-canjs/property-table/demo/propertyTable',
        'spectre-canjs/toast-container/demo/toast'
    ]
}, {
    removeDevelopmentCode: false,
    bundleSteal: false,
    bundleAssets: true,
    sourceMaps: true,
    dest: 'docs/spectre'
});

0.28.3 / 2017-05-02
===================

  * 0.28.3
  * FIX: manage buttons not working on details view

0.28.2 / 2017-05-02
===================

  * 0.28.2
  * Merge remote-tracking branch 'origin/greenkeeper/spectre.css-0.2.14'
    # Conflicts:
    #    package.json
  * Merge remote-tracking branch 'origin/greenkeeper/spectre.css-pin-0.2.13'
    # Conflicts:
    #    package.json
  * Merge remote-tracking branch 'origin/greenkeeper/testee-0.5.0'
  * Merge remote-tracking branch 'origin/greenkeeper/can-stache-3.0.24'
    # Conflicts:
    #    package.json

0.28.1 / 2017-05-02
===================

  * Merge remote-tracking branch 'origin/greenkeeper/can-event-3.4.0'
  * 0.28.1
  * FIX: Move @ sign to correct position when checking for formatter function
  * chore(package): update can-event to version 3.4.0
  * FIX: make sure check for formatter isn't calling the formatter
  * Merge pull request [#48](https://github.com/roemhildtg/spectre-canjs/issues/48) from roemhildtg/greenkeeper/can-event-3.3.2
    chore(package): update can-event to version 3.3.2
  * chore(package): update can-event to version 3.3.2
  * FIX: broken menu headers
  * changelog

0.28.0 / 2017-05-02
===================

  * 0.28.0
  * DOCS: template fix
  * DOCS: missing property fields
  * TEST: remove lint
  * DOCS: add detailed demo
  * CHG: use stache key synatax to access formatter on field
    - eliminate need for getFieldValue in viewmodel
  * CHG: use stache key value to access field formatter rather than helper function
    - removes extra function getvalue from property-table
  * FIX: remove extra css
  * CHG: exclude properties renamed to functional names
    - https://github.com/roemhildtg/spectre-canjs/issues/47
  * CHG: rename excludePropertyTable: true to detail: false
    -https://github.com/roemhildtg/spectre-canjs/issues/47
  * CHG: rename excludeListTable: true to list: false
    - https://github.com/roemhildtg/spectre-canjs/issues/47
  * CHG: rename excludeForm: true to edit: false
    - https://github.com/roemhildtg/spectre-canjs/issues/47
  * chore(package): update testee to version 0.5.0
    https://greenkeeper.io/
  * FIX: missing toast-container span tag
  * FIX: form field has-danger should be has-error
  * Merge remote-tracking branch 'origin/master'
    # Conflicts:
    #    package.json
  * Merge pull request [#45](https://github.com/roemhildtg/spectre-canjs/issues/45) from roemhildtg/greenkeeper/can-define-1.0.22
    chore(package): update can-define to version 1.0.22
  * chore(package): update can-define to version 1.0.22
    https://greenkeeper.io/
  * Merge pull request [#44](https://github.com/roemhildtg/spectre-canjs/issues/44) from roemhildtg/greenkeeper/can-define-1.0.21
    chore(package): update can-define to version 1.0.21
  * chore(package): update can-define to version 1.0.21
    https://greenkeeper.io/
  * Merge remote-tracking branch 'origin/greenkeeper/can-define-1.0.19'
  * Merge remote-tracking branch 'origin/greenkeeper/can-util-3.5.1'
    # Conflicts:
    #    package.json
  * Merge remote-tracking branch 'origin/greenkeeper/can-util-3.4.1'
  * chore(package): update can-define to version 1.0.19
    https://greenkeeper.io/
  * chore(package): update can-stache to version 3.0.24
    https://greenkeeper.io/
  * fix: pin spectre.css to 0.2.13
  * chore(package): update spectre.css to version 0.2.14
    https://greenkeeper.io/
  * chore(package): update can-util to version 3.5.1
    https://greenkeeper.io/
  * chore(package): update can-util to version 3.4.1
    https://greenkeeper.io/
  * chore(package): update steal to version 1.5.0
    https://greenkeeper.io/

0.27.2 / 2017-04-24
===================

  * 0.27.2
  * FIX: revert previous commit removed formObject
  * changelog

0.27.1 / 2017-04-24
===================

  * 0.27.1
  * FIX: revert bug from previous commit
  * changelog

0.27.0 / 2017-04-24
===================

  * 0.27.0
  * CHG: remove obsolete tests
  * DOCS: fix
  * FIX: filter-widget - make sure field type uses textarea: false
  * DOCS: fix demo to use steal.production
  * ENH: data-admin - moves duplicate manage menu into template partial [#20](https://github.com/roemhildtg/spectre-canjs/issues/20)
  * Merge pull request [#34](https://github.com/roemhildtg/spectre-canjs/issues/34) from roemhildtg/greenkeeper/can-util-3.3.7
    chore(package): update can-util to version 3.3.7
  * Merge pull request [#35](https://github.com/roemhildtg/spectre-canjs/issues/35) from roemhildtg/greenkeeper/steal-1.4.6
    chore(package): update steal to version 1.4.6
  * Merge pull request [#33](https://github.com/roemhildtg/spectre-canjs/issues/33) from roemhildtg/greenkeeper/steal-tools-1.3.1
    chore(package): update steal-tools to version 1.3.1
  * Merge branch 'master' into greenkeeper/steal-tools-1.3.1
  * Merge pull request [#28](https://github.com/roemhildtg/spectre-canjs/issues/28) from roemhildtg/greenkeeper/testee-0.4.0
    Update testee to the latest version 🚀
  * changelog

0.26.1 / 2017-04-19
===================

  * 0.26.1
  * FIX: failing to pass isNew to saveObject
  * FIX: minor cleanup
  * chore(package): update steal-tools to version 1.3.1
    https://greenkeeper.io/
  * chore(package): update steal to version 1.4.6
    https://greenkeeper.io/
  * chore(package): update can-util to version 3.3.7
    https://greenkeeper.io/
  * FIX: make event names lowercase
    - html attributes are case insensitive
  * ENH: allow `beforeCreate` and `beforeDelete` to return promiselike objects
    - data-admin waits to save/delete object until promise resolves
  * FIX: date-field get utc date values when splitting date
  * chore(package): update testee to version 0.4.0
    https://greenkeeper.io/

0.26.0 / 2017-04-12
===================

  * Merge remote-tracking branch 'origin/master'
  * changelog
  * 0.26.0
  * TEST: date-field failing tests
  * ENH: allow select-field to use promise for options
  * FIX: date-field bugs
    - validation errors displayed
    - if date dropdowns are not populated, return null value
  * FIX: hide delete button if `view.disableDelete` is true

0.25.0 / 2017-04-04
===================

  * 0.25.0
  * CHG: make form-widget dirtyObject a DefineMap
  * add gitter integration

0.24.8 / 2017-03-31
===================

  * 0.24.8
  * ENH: add titleProp for displaying a custom title property on data-admin details page

0.24.7 / 2017-03-29
===================

  * 0.24.7
  * FIX: compile field templates in template getter
  * ENH: class names for list-table
  * ENH: make sure focus object is loaded before displaying details view
  * DOCS: remove @type and fix missing props
  * changelog

0.24.6 / 2017-03-15
===================

  * 0.24.6
  * ENH: add fade in to nav (tabs) container
  * FIX: modal dialog no backdrop again
  * Revert "FIX: remove invisible blocking container if modal:backdrop is false"
    This reverts commit 4614dc5e9a40467c3a0e454cd15f0875807e7d9b.
  * changelog

0.24.5 / 2017-03-15
===================

  * 0.24.5
  * FIX: export component constructor as default
  * DOCS: add missing property documentation

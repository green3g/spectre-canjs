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
  * FIX: remove invisible blocking container if modal:backdrop is false
  * DOCS: fix name typo on field utility functions
  * DOCS: fix typos and add details
  * changelog

0.24.4 / 2017-03-13
===================

  * 0.24.4
  * DOCS: document modal dialog and confirm dialog
  * ENH: add optional backdrop property to allow hiding the modal's backdrop

0.24.3 / 2017-03-10
===================

  * 0.24.3
  * Merge remote-tracking branch 'origin/greenkeeper/steal-tools-1.2.0'
  * DOCS: fix toast-item documentation
  * chore(package): update steal-tools to version 1.2.0
    https://greenkeeper.io/
  * changelog

0.24.2 / 2017-03-07
===================

  * 0.24.2
  * Merge remote-tracking branch 'origin/greenkeeper/eslint-3.17.1'
  * Merge remote-tracking branch 'origin/greenkeeper/can-stache-3.0.20'
  * TEST: use older firefox in travis build
  * chore(package): update can-stache to version 3.0.20
    https://greenkeeper.io/
  * chore(package): update eslint to version 3.17.1
    https://greenkeeper.io/
  * DOCS: fix minor typos in demos
  * get rid of 0 padding
  * add javascript source code to demo viewer
  * Merge pull request [#19](https://github.com/roemhildtg/spectre-canjs/issues/19) from roemhildtg/greenkeeper/eslint-3.14.0
    chore(package): update eslint to version 3.14.0
  * changelog

0.24.1 / 2017-03-01
===================

  * 0.24.1
  * FIX: prevent page navigation when quick filter is selected

0.24.0 / 2017-03-01
===================

  * 0.24.0
  * ENH: add github style quick filter capabilities to data-admin
    - update and fix docs
    - use dropdown-menu for filter-widget
  * DOCS: field documentation fixes

0.23.2 / 2017-02-28
===================

  * 0.23.2
  * ENH: use right positioned dropdown on manage items detail view
  * ENH: add right positioning option to dropdowns
  * fix(package): update spectre.css to version 0.2.3
    Closes [#17](https://github.com/roemhildtg/spectre-canjs/issues/17)
    https://greenkeeper.io/

0.23.1 / 2017-02-15
===================

  * 0.23.1
  * TEST: data-admin - new relatedField/relatedValue setters
  * ENH: add show/hide events to modal dialog
  * FIX: subform-field include missing css
  * ENH: list-table don't show buttons if none exist
  * DOCS: fix view function typos
  * FIX: data-admin - related view titles
  * ENH: data-admin hide edit/details tabs if not selected
  * ENH: data-admin - move init code into relatedField setter
  * CHANGELOG

0.23.0 / 2017-02-09
===================

  * 0.23.0
  * CHG: rename all `disableAdd` properties to `disableCreate` to fix discrepancies across application
  * FIX: dont show details and edit tabs until there is an item to be edited/viewed
  * ENH: data-admin: organize related tables in nav-containers on details view
  * changelog

0.22.5 / 2017-02-09
===================

  * 0.22.5
  * ENH: generate fields from inherited DefineMaps
  * FIX: subform - serialize subform object before dispatching event

0.22.4 / 2017-02-07
===================

  * 0.22.4
  * Cleanup: rename test file

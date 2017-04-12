
0.25.0 / 2017-04-04
===================

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
  * FIX: subform-field remove type 'string' and serialize objects if available
  * FIX: add fieldset border to subform-field
  * changelog

0.22.3 / 2017-02-01
===================

  * 0.22.3
  * ENH: json-field format fieldsets that were removed in https://github.com/picturepan2/spectre/pull/136
  * changelog

0.22.2 / 2017-01-31
===================

  * 0.22.2
  * FIX:dropdown-menu - preventDefault on mouse click primaryButtons
  * changelog

0.22.1 / 2017-01-31
===================

  * 0.22.1
  * DOCS: add primaryButtons to list-table demo
  * FIX: make dropdown primary button clicks return false to prevent setting hash
  * changelog

0.22.0 / 2017-01-28
===================

  * 0.22.0
  * FIX: fix failing tests related to primaryButton changes
  * CHG: `primaryButton` changed to array of type button, `primaryButtons`
    - allow for more flexibility in dropdown-menu, list-table, and data-admin
  * CHG: list-table buttons now appear as a menu
    -  In addition, primaryButton can appear beside the menu dropdown
    - adds primaryButton to data-admin, list-table, and dropdown-menu
  * ENH: adds checkbox template to field factory
  * CHG: use common 'text' property for all button objects between different components
    - more common names between properties
    - includes breaking change for list-table, change button 'title' to 'text'
  * changelog

0.21.4 / 2017-01-26
===================

  * 0.21.4
  * DOCS: add docs for checkbox field
  * Merge remote-tracking branch 'origin/master'
  * ENH: add new checkbox field
  * ENH: add subform field as replacement for json-field
    - subform to replace json-field as it doesn't automatically convert obj to json
    - obj can be serialized to json easily before sending to server using defineMap's serialize
  * DOCS:minor layout fixes
  * DOCS: force push gh-pages branch
  * Finish documenting data-admin
  * DOCS: template tweaks and updates
  * add custom template theme using spectre.css
  * chore(package): update eslint to version 3.14.0
    https://greenkeeper.io/

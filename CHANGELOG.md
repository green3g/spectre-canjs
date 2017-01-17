0.20.0 / 2017-01-17
===================

  * 0.20.0
  * CHG: fix failing date-field test
  * DOCS: update demo to use `fields` property example
  * FIX: update fieldchange event
  * DOCS: remove extra bundles
  * DOCS: fix import statements
    - remove comments from import statements
    - use package name in spectre imports
  * minor cleanup
  * DOCS: rename bundle script
  * ENH: update all dependancies and docs build script
  * FIX: attempt at changing event name to solve form event issues
    - add missing properties and documentation
  * FIX: missing `name` property should be `properties.name`
  * TEST: fix failing form tests
  * EHN: form widget now uses a "dirty" object to track changes
    - rather than writing to the original
    - events are modified to accommodate
    - validation functions now accept a single object with several new props
  * BUILD: make sure each module is listed in index for build
  * ENH: update steal-tools
  * ENH: use new key binding syntax on field templates
  * move docs bundles to docs folder
  * Updates dependencies
  * DOCS: move doc bundle to script
  * FIX: json-field - generate fields from ObjectTemplate
  * FIX: form-widget - eliminate the use of dashes in event name field-change
    - event dispatched is now `fieldchange`
    - JSON field updated to use `fieldchange` event
    - JSON field added to demo
  * changelog

0.19.1 / 2017-01-10
===================

  * 0.19.1
  * FIX: make field objects extensible
  * DOCS: git-add to ensure changes are published
  * FIX: lint errors with demo
  * fix demo path
  * move demos into demo folder
  * updates deps
  * update docs script
  * changelog

0.19.0 / 2017-01-09
===================

  * 0.19.0
  * FIX: reset page when viewmodel parameters change
  * CHG: Cleanup extra and unused code and move tests to Filter object where appropriate
  * Merge remote-tracking branch 'origin/master'
  * CHG: replace assign with object-assign
  * FIX: filter-widget - make sure default field type is inline display
  * ENH: if fields property is provided to filter-widget, use it to create a customized value field for different fieldTypes
  * CHG: move field's inline property to field's properties object
  * ignore demo files from linting
  * docs: merge changes on build
  * update build script
  * add build scripts and docs
  * update demos
  * FIX: fix merge conflict
  * Merge remote-tracking branch 'origin'
  * CHG: remove jquery dependency as its no longer necessary
  * FIX: file-field set content type to json

0.18.2 / 2017-01-06
===================

  * changelog
  * 0.18.2
  * FIX: file-field:convert delete data to json before sending

0.18.1 / 2017-01-06
===================

  * changelog
  * 0.18.1
  * FIX: file-field:remove extra send function

0.18.0 / 2017-01-05
===================

  * 0.18.0
  * Merge remote-tracking branch 'origin/greenkeeper/can-connect-1.1.1'
    # Conflicts:
    #    package.json
  * Merge pull request [#10](https://github.com/roemhildtg/spectre-canjs/issues/10) from roemhildtg/greenkeeper/can-component-3.0.5
    chore(package): update can-component to version 3.0.5
  * Merge pull request [#9](https://github.com/roemhildtg/spectre-canjs/issues/9) from roemhildtg/greenkeeper/can-define-1.0.12
    chore(package): update can-define to version 1.0.12
  * Merge pull request [#8](https://github.com/roemhildtg/spectre-canjs/issues/8) from roemhildtg/greenkeeper/steal-1.0.8
    chore(package): update steal to version 1.0.8
  * Merge pull request [#7](https://github.com/roemhildtg/spectre-canjs/issues/7) from roemhildtg/greenkeeper/steal-less-1.0.2
    chore(package): update steal-less to version 1.0.2
  * file-field create the list in the getter and set it
  * dropdown-menu: renames toggled to visible
  * removes jquery dependency
  * chore(package): update steal-less to version 1.0.2
    https://greenkeeper.io/
  * chore(package): update steal to version 1.0.8
    https://greenkeeper.io/
  * chore(package): update can-define to version 1.0.12
    https://greenkeeper.io/
  * chore(package): update can-connect to version 1.1.1
    https://greenkeeper.io/
  * chore(package): update can-component to version 3.0.5
    https://greenkeeper.io/
  * remove extra dep
  * make file upload more mobile friendly
  * update deps
  * fix missing jsdoc
  * add tests and docs for field-components
  * data-admin fix NaN displayed if totalPages is 1
  * changelog

0.17.2 / 2016-12-29
===================

  * 0.17.2
  * fix typo in filter-widget overlay classname
  * changelog

0.17.1 / 2016-12-29
===================

  * 0.17.1
  * fix display of filter-widget in data-admin
  * changelog

0.17.0 / 2016-12-29
===================

  * 0.17.0
  * 0.16.0
  * add tests for date-field
  * add dependency free datepicker
  * changelog

0.15.13 / 2016-12-23
====================

  * 0.15.13
  * updates dependencies/reformatted json
  * minor template tweaks
  * Merge branch 'master' of https://github.com/roemhildtg/spectre-canjs
  * update postversion  script
  * changelog

0.15.12 / 2016-12-21
====================

  * 0.15.12
  * updating docs
  * convert dropdowns in templates to use dropdown-menu components

0.15.11 / 2016-12-20
====================

  * 0.15.11
  * fix missing jsdoc
  * dropdown-menu: pass event to viewmodel to prevent default page change

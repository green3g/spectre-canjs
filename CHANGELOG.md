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
  * FIX: json-field existing json values passed correctly
  * changelog

0.21.3 / 2017-01-20
===================

  * 0.21.3
  * TEST: data-admin updateParameters
  * FIX: fixes breaking app when existing filters are on the view and new filters are added
  * DOCS: make sure entire docs directory gets committed
  * DOCS: fix link
  * DOCS: add badge for npm
  * changelog

0.21.2 / 2017-01-19
===================

  * 0.21.2
  * BUILD: remove uneeded build step
  * FIX: json-field - fix failing tests
  * FIX: remove extra property
  * FIX: json-field serialization and form object creation works much better
  * Merge pull request [#16](https://github.com/roemhildtg/spectre-canjs/issues/16) from roemhildtg/greenkeeper/steal-1.0.11
    chore(package): update steal to version 1.0.11
  * chore(package): update steal to version 1.0.11
    https://greenkeeper.io/
  * changelog

0.21.1 / 2017-01-17
===================

  * 0.21.1
  * FIX: Update and fix issues caused by event and object changes
  * changelog

0.21.0 / 2017-01-17
===================

  * 0.21.0
  * FIX: set default value of properties to DefineMap to solve issues from d931a88b3c9a2bf1c43d6f671ccba953a9642c3e
  * DOCS: fix documentation onFieldChangeEventObject
  * CHG: field `fieldchange` events conform to the same type of event that the form widget dispatches
  * FIX: update event name to fieldchange
  * DOCS: add missing event and update validation docs
  * changelog

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

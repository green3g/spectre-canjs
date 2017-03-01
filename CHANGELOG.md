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

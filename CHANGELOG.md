0.29.1 / 2017-05-19
===================

  * 0.29.1
  * FIX: cell width issue
  * ENH: move redundant detail page title into nav-page header
  * FIX: issue with field serialization
  * ENH: add basic accordion-container

0.29.0 / 2017-05-16
===================

  * 0.29.0
  * FIX: replacing all instances of sort.fieldName with sort.field
  * FIX: lint
  * DOCS: reorganizing and updating docs
  * CHG: list-table sorting `fieldName` becomes `field`
  * DOCS
  * TEST: fix ignore
  * DOCS: documents field templates properties better
  * ENH: automatically convert string templates to renderers
  * TEST: tests
  * TEST: paginate and manage components
  * TEST: add missing nav-container tests
  * TEST: add generated codeclimate.yml
  * TEST: missing addTemplate test
  * TEST: fix misnamed modules
  * TEST: adds missing modal and confirm dialog tests
  * ENH: convert template getters to defaulter values
  * TEST: viewmap tests
  * TEST: update test coverage
  * Merge pull request [#52](https://github.com/roemhildtg/spectre-canjs/issues/52) from roemhildtg/field-super-class
    Field super class
  * TEST: remove codeclimate
  * ENH: add codeclimate config
  * FIX: issues with path and Field super class
  * ENH: move field code into super class
    - reorganize utility classes
  * FIX: ignore files from codeclimate
  * Merge branch 'master' of https://github.com/roemhildtg/spectre-canjs
  * FIX: consistency between viewModel and ViewModel in components
  * Merge pull request [#51](https://github.com/roemhildtg/spectre-canjs/issues/51) from roemhildtg/modular-data-admin-[#20](https://github.com/roemhildtg/spectre-canjs/issues/20)
    Modular data admin [#20](https://github.com/roemhildtg/spectre-canjs/issues/20)
  * TEST: coverage working
  * FIX: filter values should be coerced to field type
  * TEST: add coverage to travis
  * TEST: add additional cases to fixture
  * FIX: numerous path fixes and modifications
  * TEST: enhancements
  * Add some custom behaviors to can-connect to get totalItems and convert parameters
  * FIX: show cursor when buttons are hovered
  * FIX: minor typo
  * DOCS: fix demo list-table
  * TEST: adds test coverage reporting
  * CHG: cleans up button madness and replaces `manageButtons` with `actions` in viewMap configs
  * CHG: replaces field.formatter with field.displayTemplate
    https://github.com/roemhildtg/spectre-canjs/issues/50
    - a partial template to render the field when it is displayed (list-table, property-table)
    - list-table no longer has buttons since they can be
    rendered with the field template
  * FIX: adds missing tests
  * FIX: fixing management buttons and actions
  * FIX: bug with menu item headers
  * ENH: cleaning up buttons and data-admin modularization
    https://github.com/roemhildtg/spectre-canjs/issues/20
    https://github.com/roemhildtg/spectre-canjs/issues/50
  * ENH: replace list view templates with new components and clean up css
    https://github.com/roemhildtg/spectre-canjs/issues/20
  * ENH: create manage-toolbar component
    https://github.com/roemhildtg/spectre-canjs/issues/20
  * ENH: create search-control component
    https://github.com/roemhildtg/spectre-canjs/issues/20
  * ENH: create paginate-footer component
    https://github.com/roemhildtg/spectre-canjs/issues/20

0.28.5 / 2017-05-08
===================

  * 0.28.5
  * ENH: minor efficiency improvement
    - use different id to delete to avoid failing test
  * DOCS: minor cleanup
  * ENH: make select-field more DRY
  * ENH: display custom confirm-dialog for delete prompts
  * FIX: bug with confirm-dialog
    - reject action was never called
    - enhance the promise to reload if the active property changes
  * changelog

0.28.4 / 2017-05-08
===================

  * 0.28.4
  * FIX: failing filter test for excluding field from filter
  * ENH: update dependencies
  * ENH: don't use two-way binding where unecessary
  * FIX: simplify filter field api
  * FIX: float issue in data-admin
  * fix lint errors
  * ENH: prompt user before sending delete request to server
  * FIX: add properties to track related filter. fixes duplicate related filters being created
  * FIX: add methods to create and update relatedFilter from relatedField and relatedValue

0.28.3 / 2017-05-02
===================

  * changelog
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

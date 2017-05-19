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


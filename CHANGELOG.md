0.31.3 / 2017-07-20
===================

  * 0.31.3
  * ff 53
  * canjs 3.9 packages

0.31.2 / 2017-07-20
===================

  * 0.31.2
  * update packages - roll back can-define
  * changelog

0.31.1 / 2017-07-03
===================

  * 0.31.1
  * FIX: toast imports and demo
  * changelog

0.31.0 / 2017-07-03
===================

  * 0.31.0
  * 0.30.1
  * update packages
  * add missing dependency
  * ignore vscode files
  * TEST: add missing test
  * DOCS: update demos

0.30.1 / 2017-06-26
===================

  * log errors
  * 0.30.0
  * LINT
  * Using npm 5
  * using NPM 5
  * FIX indent
  * FIX: move `object` to widget viewmodels
  * FIX: .map returns plain array now
  * ENH: (experimental) add a new multi-field checkbox type that uses a list as a value
  * ENH: add a toggle method and allow inheriting widgets like accordions to hide pages
  * ENH: separate sp-select-field component from viewmodel
  * ENH: add nicer looking accordion styles
  * fix travis npm 5 build
  * TEST: update firefox
  * TEST: debug travis

0.30.0 / 2017-06-13
===================

  * DOCS
  * ENH: add the ability to add custom classes to a nav container
  * FIX: add extra space between filters/picker
  * ENH: filter widget - make add filter inline, and place it below the existing filters for better ux
  * ENH: separate modular utility classes where possible
  * ENH: better code organization - separate component from view model modules
  * FIX: removes test files for data-admin
  * FIX: removes other data-admin component test
  * FIX: remove data-admin tests, etc.
  * CHG: move data-admin components to spectre-canjs-app
  * FIX: format comments
  * ENH: hide header tools on printouts
  * ENH: pass field name in form validation functions
  * FIX: disable sort on actions field and hide on printout

0.29.2 / 2017-06-02
===================

  * 0.25.2
  * FIX: demo contains invalid characters
  * DOCS: add experimental note
  * ENH: implement additional properties on filter objects to restrict editing `pinned: true` and hide completely `visible: false`
  * cleanup
  * FIX: sp-file-field value updating
  * ENH: add default sp-list-table sorting mechanism
    - ENH: field.classes property to list and property tables
  * FIX: field update handling in field widgets and filter
  * ENH: add fade effect to data-admin loading state
    - fix sort with new sp-list-table sorting
    - minor cleanup
  * ENH: tighten the lint rules
  * CHG: rename FieldComponentMap to a better described FieldIteratorMap
    - a class that iterates and builds field lists
  * ENH: move bulk of field widget code into parent class FieldInputMap

0.29.1 / 2017-05-19
===================

  * changelog
  * 0.29.1
  * FIX: cell width issue
  * ENH: move redundant detail page title into sp-tab-page header
  * FIX: issue with field serialization
  * ENH: add basic sp-accordion

0.29.0 / 2017-05-16
===================

  * 0.29.0
  * FIX: replacing all instances of sort.fieldName with sort.field
  * FIX: lint
  * DOCS: reorganizing and updating docs
  * CHG: sp-list-table sorting `fieldName` becomes `field`
  * DOCS
  * TEST: fix ignore
  * DOCS: documents field templates properties better
  * ENH: automatically convert string templates to renderers
  * TEST: tests
  * TEST: paginate and manage components
  * TEST: add missing sp-tab-container tests
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

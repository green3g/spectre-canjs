0.15.13 / 2016-12-23
====================

  * 0.15.13
  * updates dependencies/reformatted json
  * minor template tweaks
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
  * dropdown-menu: add additional docs and property defs

0.15.10 / 2016-12-20
====================

  * 0.15.10
  * format template and add docs
  * dropdown-menu: if visible simply hideAll
  * enhancement: first dropdown-menu draft
  * run build scripts after version

0.16.0 / 2016-12-19
===================

  * 0.16.0
  * fix: form-widget failing test
  * enhancement: updates steal
  * add pre/postversion scripts
  * enhancement: reset page to 'list' and refresh after delete
  * fix: make form validation more robust

0.15.9 / 2016-12-19
===================

  * 0.15.9
  * fix: data-admin invalid error logging function
  * Fix: filter-widget mismatched binding syntax

0.15.8 / 2016-12-19
===================

  * 0.15.8
  * 0.15.7
  * fix: filter-widget - convert fields to type Field automatically
  * Merge remote-tracking branch 'origin/master'
    # Conflicts:
    #    package.json

0.15.6 / 2016-12-17
===================

  * 0.15.6
  * 0.15.5
  * add missin jquery package
  * Merge branch 'master' of https://github.com/roemhildtg/spectre-canjs
  * Merge pull request [#1](https://github.com/roemhildtg/spectre-canjs/issues/1) from roemhildtg/greenkeeper-update-all
    Update all dependencies 🌴
  * chore(package): update dependencies
    https://greenkeeper.io/
  * Merge remote-tracking branch 'origin'
  * add steal-qunit dependency

0.15.5 / 2016-12-16
===================

  * 0.15.5
  * fix build problems with import syntax
  * 0.15.4
  * fix: reserved methods shouldn't be created in fields
  * adds missing deps
  * add missing testee

0.15.3 / 2016-12-12
===================

  * 0.15.3
  * lint free
  * tests passing
  * 0.15.2
  * ie11 compatibility with  object.assign

0.15.1 / 2016-12-07
===================

  * 0.15.1
  * update can-define
  * move filter widget into dropdown

0.15.0 / 2016-12-07
===================

  * 0.15.0
  * add dropdown css
  * update steal to rc2
  * 0.14.5
  * Revert "workaround can-define issue with '#' and concat"
    This reverts commit 1e18fc3285097c4a83582016b86d2e2835539a9f.

0.14.4 / 2016-12-05
===================

  * 0.14.4
  * remove extra workaround
  * workaround can-define issue with '#' and concat
  * custom deepcopy parameters so filters aren't overwritten

0.14.3 / 2016-12-05
===================

  * 0.14.3
  * add missing valueField prop

0.14.2 / 2016-12-05
===================

  * 0.14.2
  * add missing docs
  * fix rename property and add docs on filter

0.14.1 / 2016-12-01
===================

  * 0.14.1
  * fix typo view property objectTemplate to ObjectTemplate

0.14.0 / 2016-11-30
===================

  * 0.14.0

0.13.0 / 2016-11-30
===================

  * 0.13.0
  * fix inline display issues
  * fix filter widget issue use push temporarily instead of concat
  * adds missing props to field view models

0.12.0 / 2016-11-18
===================

  * 0.12.0
  * find and replace old "can"
  * add another example to paginate demo
  * make ToastList coerce into toasts
  * enable customizations on paginate to hide button parts

0.11.2 / 2016-11-18
===================

  * 0.11.2
  * fix undeclared var "val" in saveObject
  * fixes layout issues with "manageButtons" in details page

0.11.1 / 2016-11-16
===================

  * 0.11.1
  * validations can accept a second parameter, the formObject

0.11.0 / 2016-11-16
===================

  * 0.11.0
  * 0.10.0
  * adds validation to form fields

0.9.1 / 2016-11-16
==================

  * 0.9.1
  * fix upload field and other field layout issues
  * Remove extra files
  * add manage buttons links to 'detail' view
  * fix typo in related value key
  * - Use blur and focus events to show and hide menu
    - Use new [] syntax in getting "related value"
  * toast-container - make sure toasts are coerced to type Toast

0.10.0 / 2016-11-11
===================

  * add additional types to the toast item

0.9.0 / 2016-11-07
==================

  * 0.9.0
  * Don't require unneeded package
  * Make page visibilty look up parent's isActive function
  * Cleanup viewmap
    - remove extra properties
    - change error functions to error<Save|Deleve>

0.8.1 / 2016-11-04
==================

  * 0.8.1
  * ignore docs on publish

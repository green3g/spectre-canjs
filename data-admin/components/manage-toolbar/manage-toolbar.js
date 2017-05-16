import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';

import template from './manage-toolbar.stache';

/**
 * @constructor manage-toolbar.ViewModel ViewModel
 * @parent manage-toolbar
 * @group manage-toolbar.ViewModel.props Properties
 *
 * @description A `<manage-toolbar />` component's ViewModel
 */
export const ViewModel = DefineMap.extend({
  /**
   * @prototype
   */
  /**
   * The buttons to display in the toolbar
   * @property {Array<dropdown-menu.ButtonObject} manage-toolbar.ViewModel.props.buttons buttons
   * @parent manage-toolbar.ViewModel.props
   */
    buttons: DefineList,
  /**
   * Called when a button is clicked. This dispatches the button's event and
   * calls the buttons `onClick` method if it exists
   * @function dispatchButtonEvent
   * @signature
   * @param  {ButtonObject} button The button object that was clicked
   */
    dispatchEvent (button) {
        this.dispatch('buttonclick', [button]);
    }
});

export default Component.extend({
    ViewModel: ViewModel,
    view: template,
    tag: 'manage-toolbar'
});

import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';

import template from './manage-toolbar.stache';

export const ViewModel = DefineMap.extend({
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

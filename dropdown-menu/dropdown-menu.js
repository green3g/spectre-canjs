import './dropdown-menu.less';
import template from './template.stache';

import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import canViewModel from 'can-view-model';


/**
 * @constructor dropdown-menu.ViewModel ViewModel
 * @parent dropdown-menu
 * @group dropdown-menu.ViewModel.props Properties
 *
 * @description A `<dropdown-menu />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('DropdownMenu', {
    /**
     * The current state of the dropdown menu
     * @property {Boolean} dropdown-menu-props.toggled
     * @parent dropdown-menu.ViewModel.props
     */
    toggled: 'boolean',
    /**
     * toggles the display of a dropdown-menu component
     * @param {Boolean} val (optional) whether or not to display the menu, if undefined the dropdown will be toggled
     * @returns {Boolean} always returns false to prevent page navigation from occuring
     */
    toggle (val) {
        if (typeof val !== 'undefined') {
            this.toggled = Boolean(val);
        } else if (!this.toggled) {
            this.hideAll();
            this.toggled = true;
        } else {
            this.hideAll();
        }
        return false;
    },
    /**
     * queries the dom for other dropdown-menu components and hides them
     */
    hideAll () {
        document.querySelectorAll('dropdown-menu').forEach((e) => {
            const vm = canViewModel(e);
            if (vm.toggled) {
                vm.toggled = false;
            }
        });
    }
});

export default Component.extend({
    tag: 'dropdown-menu',
    view: template,
    viewModel: ViewModel
});

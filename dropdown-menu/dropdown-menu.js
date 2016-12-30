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
     * @prototype
     */
    /**
     * The icon class to display next to the dropdown. <br />
     * The default is a font-awesome caret
     * `fa fa-fw fa-caret-down`
     * @property {Boolean} dropdown-menu.ViewModel.props.iconClass
     * @parent dropdown-menu.ViewModel.props
     */
    iconClass: {value: 'fa fa-fw fa-caret-down', type: 'string'},
    /**
     * The text to display in the dropdown button
     * @property {String} dropdown-menu.ViewModel.text text
     * @parent dropdown-menu.ViewModel.props
     */
    text: 'string',
    /**
     * The current state of the dropdown menu
     * @property {Boolean} dropdown-menu.ViewModel.toggled toggled
     * @parent dropdown-menu.ViewModel.props
     */
    toggled: 'boolean',
    /**
     * toggles the display of a dropdown-menu component
     * @function toggle
     * @signature
     * @param {Event} ev (event) the click event to cancel
     * @param {Boolean} val (optional) whether or not to display the menu, if undefined the dropdown will be toggled
     * @return {Boolean} always returns false to prevent page navigation from occuring
     */
    toggle (ev, val) {
        if (ev) {
            ev.preventDefault();
        }
        if (typeof val !== 'undefined') {
            this.toggled = Boolean(val);
        } else if (!this.toggled) {
            this.hideAll();
            this.toggled = true;
        } else {
            this.toggled = false;
            this.hideAll();
        }
        return false;
    },
    /**
     * Queries the dom for other dropdown-menu components and hides them
     * @function hideAll
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

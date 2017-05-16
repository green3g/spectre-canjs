import './dropdown-menu.less';
import template from './template.stache';

import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Component from 'can-component';
import canViewModel from 'can-view-model';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';


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
     * @property {Boolean} dropdown-menu.ViewModel.visible visible
     * @parent dropdown-menu.ViewModel.props
     */
    visible: 'boolean',
    /**
     * The button class to apply to the button dropdown. The default is `btn btn-link`.
     * See the spectre.css styles for details on more button classes available
     * @property {String} dropdown-menu.ViewModel.props.buttonClass buttonClass
     * @parent dropdown-menu.ViewModel.props
     */
    buttonClass: {
        type: 'string',
        value: 'btn btn-link'
    },
    /**
     * An array of buttons to display next to the dropdown button. This creates a split
     * dropdown menu button group
     * @property {Array<ButtonObject>} dropdown-menu.ViewModel.props.primaryButtons primaryButtons
     * @parent dropdown-menu.ViewModel.props
     */
    primaryButtons: DefineList,
    /**
     * Whether or not to align this dropdown menu on the right hand side of
     * the button.
     * @property {HTMLBoolean} dropdown-menu.ViewModel.props.right right
     * @parent dropdown-menu.ViewModel.props
     */
    right: 'htmlbool',
    /**
     * toggles the display of a dropdown-menu component
     * @function toggle
     * @signature
     * @param {Event} ev (event) the click event to cancel
     * @param {Boolean} val optional - whether or not to display the menu,
     * if undefined the dropdown will toggle the current visibility
     * @return {Boolean} always returns false to prevent page navigation from occuring
     */
    toggle (ev, val) {
        if (ev) {
            ev.preventDefault();
        }
        if (typeof val !== 'undefined') {
            this.visible = Boolean(val);
        } else if (!this.visible) {
            this.hideAll();
            this.visible = true;
        } else {
            this.visible = false;
            this.hideAll();
        }
        return false;
    },
    /**
     * Queries the dom for other dropdown-menu components and hides them.
     * This is used when a dropdown component is visible and another one is
     * clicked, any others will be made invisible
     * @function hideAll
     * @signature `hideAll()`
     */
    hideAll () {
        const nodes = document.querySelectorAll('dropdown-menu');
        for (let i = 0; i < nodes.length; i ++) {
            const vm = canViewModel(nodes[i]);
            if (vm.visible) {
                vm.visible = false;
            }
        }
    },
    /**
     * When a primary button is clicked, this function dispatches the `primaryclick`
     * event with the button that was clicked as its argument.
     * @function onPrimaryClick
     * @param {ButtonObject} button the button that was clicked
     * @param {MouseEvent} event The mouse click event on the button that we should prevent default
     * @return {Boolean} returns false to prevent event from changing page route
     */
    onPrimaryClick (button, event) {
        if (event) {
            event.preventDefault();
        }
        this.dispatch('primaryclick', [button]);
        return false;
    }
});

assign(ViewModel.prototype, canEvent);


export default Component.extend({
    tag: 'dropdown-menu',
    view: template,
    ViewModel: ViewModel
});

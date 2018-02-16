import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import canViewModel from 'can-view-model';

/**
 * Dropdown View Model
 * 
 * @class ViewModel
 * @memberof sp-dropdown
 */
export default DefineMap.extend('DropdownMenu', {
    /** @lends sp-dropdown.ViewModel.prototype */
    /**
     * The icon class to display next to the dropdown. <br />
     * The default is a font-awesome caret `fa fa-fw fa-caret-down`
     * @type {string} Icon to display next to the dropdown text
     * @memberof sp-dropdown.ViewModel
     * @example iconClass:from="'fa fa-fw fa-table'"
     */
    iconClass: {value: 'fa fa-fw fa-caret-down', type: 'string'},
    /**
     * The text to display in the dropdown button
     * @type {String} 
     * @memberof sp-dropdown.ViewModel
     */
    text: 'string',
    /**
     * The current state of the dropdown menu
     * @type {Boolean}
     * @memberof sp-dropdown.ViewModel
     */
    visible: 'boolean',
    /**
     * The button class to apply to the button dropdown. The default is `btn btn-link`.
     * See the spectre.css styles for details on more button classes available
     * @type {String}
     * @memberof sp-dropdown.ViewModel
     */
    buttonClass: {
        type: 'string',
        value: 'btn btn-link'
    },
    /**
     * An array of buttons to display next to the dropdown button. This creates a split
     * dropdown menu button group
     * @type {Array<sp-dropdown.ButtonObject>}
     * @memberof sp-dropdown.ViewModel
     */
    primaryButtons: DefineList,
    /**
     * Whether or not to align this dropdown menu on the right hand side of
     * the button.
     * @type {HTMLBoolean}
     * @memberof sp-dropdown.ViewModel
     */
    right: 'htmlbool',
    /**
     * toggles the display of a sp-dropdown component
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
     * Queries the dom for other sp-dropdown components and hides them.
     * This is used when a dropdown component is visible and another one is
     * clicked, any others will be made invisible
     */
    hideAll () {
        const nodes = document.querySelectorAll('sp-dropdown');
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


import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

/**
 * @constructor util/field/FieldInputMap
 * @parent util/field.types
 * @group FieldInputMap.props props
 *
 * A base class for input field component viewmodels
 */
export const ViewModel = DefineMap.extend('CheckboxField', {
    /**
     * The properties for this checkbox
     * @property {DefineMap} checkbox-field.ViewModel.props.properties properties
     * @parent checkbox-field.ViewModel.props
     */
    properties: {Value: DefineMap},
    /**
     * The form errors object
     * @property {Object} checkbox-field.ViewModel.props
     */
    errors: '*',
    /**
     * The current field value
     * @property {Object} checkbox-field.ViewModel.props.value value
     * @parent checkbox-field.ViewModel.props
     */
    value: {
        type: '*',
        value: null,
        set (val) {
            this.dispatch('fieldchange', [{
                value: val,
                name: this.properties.name
            }]);
            return val;
        }
    }
});

assign(ViewModel.prototype, canEvent);

export default ViewModel;

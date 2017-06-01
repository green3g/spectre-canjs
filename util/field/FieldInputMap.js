
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
export const ViewModel = DefineMap.extend('FieldInput', {
    /**
     * The properties for this checkbox
     * @property {DefineMap} util/field/FieldInputMap.props.properties properties
     * @parent util/field/FieldInputMap.props
     */
    properties: {Value: DefineMap},
    /**
     * The form errors object
     * @property {Object} util/field/FieldInputMap.props
     */
    errors: '*',
    /**
     * The current field value
     * @property {Object} util/field/FieldInputMap.props.value value
     * @parent util/field/FieldInputMap.props
     */
    value: {
        type: '*',
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [{
                    value: val,
                    name: this.properties.name
                }]);
            }
            return val;
        }
    }
});

assign(ViewModel.prototype, canEvent);

export default ViewModel;

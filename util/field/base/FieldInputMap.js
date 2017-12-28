
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

/**
 * @constructor util/field/base/FieldInputMap FieldInputMap
 * @parent util/field.types
 * @group FieldInputMap.props props
 *
 * A base class for input field component viewmodels
 */
export const ViewModel = DefineMap.extend('FieldInput', {
    /**
     * The properties for this checkbox
     * @property {DefineMap} FieldInputMap.props.properties properties
     * @parent FieldInputMap.props
     */
    properties: {Value: DefineMap},
    /**
     * The field error string
     * @property {String} FieldInputMap.props.error error
     * @parent FieldInputMap.props
     */
    error: 'string',
    /**
     * The current field value
     * @property {Object} FieldInputMap.props.value value
     * @parent FieldInputMap.props
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

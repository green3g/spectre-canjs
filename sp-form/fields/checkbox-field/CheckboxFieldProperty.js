import DefineMap from 'can-define/map/map';

/**
 * @constructor admin-form/field-checkbox-field.CheckboxFieldProperty CheckboxFieldProperty
 * @parent admin-form/field-checkbox-field
 * @group CheckboxFieldProperty.props Properties
 *
 * @description A properties object for the checkbox-field
 */
export default DefineMap.extend({seal: false}, {
    /**
     * The checkbox style. Spectre.css supports two styles out of the box,
     * the `checkbox` style which displays as a regular checkbox and the
     * `switch` style which appears as a switch that toggles.
     * The default is `switch`
     * @property {String} CheckboxFieldProperty.props.style style
     * @parent CheckboxFieldProperty.props
     */
    style: {
        type: 'string',
        value: 'checkbox'
    }
});

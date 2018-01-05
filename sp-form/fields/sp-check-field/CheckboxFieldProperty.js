import DefineMap from 'can-define/map/map';

/**
 * @constructor sp-form/fields/sp-check-field.CheckboxFieldProperty CheckboxFieldProperty
 * @parent sp-form/fields/sp-check-field
 * @group CheckboxFieldProperty.props Properties
 *
 * @description A properties object for the sp-check-field
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

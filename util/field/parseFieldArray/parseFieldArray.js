// eslint-disable-next-line
/**
 * Converts an array of strings or field json objects into Field objects
 * @function util/field/parseFieldArray/parseFieldArray parseFieldArray
 * @parent util/field.methods
 * @signature `parseFieldArray(fields)`
 * @param  {Array<util/field/Field | String>} fields An array of either strings or JSON like objects representing Field object properties
 * @return {Array<util/field/Field>} The array of fields
 */
export default function parseFieldArray (fields) {
    // create field objects
    return fields.map((f) => {
        // if we have a string give it a default name
        if (typeof f === 'string') {
            f = {
                name: f
            };
        }
        // add additional props with field constructor
        return f;

        // filter fields to exclude any '__' hidden props
    });
}

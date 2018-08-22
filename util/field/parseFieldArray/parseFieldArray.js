import Field from '../Field';

/**
 * Converts an array of strings or field json objects into Field objects
 * @param  {Array<Field | String>} fields An array of either strings or JSON like objects representing Field object properties
 * @param  {Constructor} Type Type of field to create and return
 * @return {Array<Field>} The array of fields
 */
export default function parseFieldArray (fields, Type = Field) {
    // create field objects
    return fields.map((f) => {
        // if we have a string give it a default name
        if (typeof f === 'string') {
            f = {
                name: f
            };
        }
        // add additional props with field constructor
        return new Type(f);
    });
}

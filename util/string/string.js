import string from 'can-util/js/string/string';

/**
 * Formats the field by replacing underscores with spaces and capitalizing the first letter
 * @memberof util/string
 * @function makeSentenceCase
 * @signature `makeSentenceCase(text)`
 * @param  {String} text The name of the field
 * @return {String} The formatted field string. Example: `my_field_name` will become `My field name`.
 */
export function makeSentenceCase (text) {
    text = String(text);
    return string.capitalize(String.prototype.trim.call(
        text.split('_')
            .join(' ')
            .toLowerCase()
            .replace(/ +/g, ' ')
    ));
}

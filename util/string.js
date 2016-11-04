import util from 'can-util';

/**
 * Formats the field by replacing underscores with spaces and capitalizing the first letter
 * @signature
 * @param  {String} text The name of the field
 * @return {String} The formatted field string. Example: `my_field_name` will become `My field name`.
 */
export const makeSentenceCase = (text) => {
    text = String(text);
    return util.string.capitalize(String.prototype.trim.call(
    text.split('_')
    .join(' ')
    .toLowerCase()
    .replace(/ +/g, ' ')
  ));
};

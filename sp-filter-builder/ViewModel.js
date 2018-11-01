import FieldIteratorMap from '../util/field/base/FieldIteratorMap';
import {makeSentenceCase} from '../util/string/string';
import {Filter, FilterList} from './Filter';

/**
 * A `<sp-filter-builder />` component's ViewModel.
 * 
 * @class ViewModel
 * @memberof sp-filter-builder
 */
const ViewModel = FieldIteratorMap.extend('FilterWidget', {
    /** @lends sp-filter-builder.ViewModel.prototype */
    /**
     * Disabled the add new form if true
     * @type {Boolean} 
     * @memberof sp-filter-builder.ViewModel.prototype

     */
    disableCreate: 'htmlbool',
    /**
       * A string referencing a field type that will exclude that field
       * from this classes fields. The default is 'list'.
       * @type {String} 
       * @memberof sp-filter-builder.ViewModel.prototype
       */
    excludeFieldKey: {
        default: 'filter'
    },
    /**
     * A list of filterObjects currently used in this widget
     * @type {Array<sp-filter-builder.Filter>} 
     * @memberof sp-filter-builder.ViewModel.prototype
     */
    filters: {
        Type: FilterList,
        Default: FilterList
    },
    /**
     * The field properties for the field name dropdown
     * @type {Object} 
     * @memberof sp-filter-builder.ViewModel.prototype
     */
    nameField: {
        get () {
            return this.fieldOptions.length ? {
                formatter: makeSentenceCase,
                name: 'name',
                alias: 'Add filter',
                fieldType: 'select',
                options: this.fieldOptions,
                defaultLabel: 'Add a filter',
                inline: true
            } : {
                name: 'name',
                alias: 'Field Name',
                placeholder: 'Enter fieldname'
            };
        }
    },
    /**
     * An array of field options to display for the field selection dropdown.
     * @type {Array<sp-form/fields/sp-select-field.SelectOption>} 
     * @memberof sp-filter-builder.ViewModel.prototype
     */
    fieldOptions: {
        get () {
            if (this.fields.length) {
                return this.fields.map((f) => {
                    return {
                        value: f.name,
                        label: f.alias
                    };
                });
            }
            return [];
        }
    },
    /**
     * The selected field dropdown value
     * @type {String} 
     * @memberof sp-filter-builder.ViewModel.prototype
     */
    fieldValue: {
        type: 'string',
        default: '_'
    },
    /**
     * Removes a filter from the list of filters
     * @param  {sp-filter-builder.Filter} obj  The object to remove. This is the only argument used by the function, the rest may be null.
     * @return {undefined}
     */
    removeFilter (obj) {
        const index = this.filters.indexOf(obj);
        this.filters.splice(index, 1);
    },
    /**
     * Replaces the filter array with an empty array, clearing all existing filters
     * @return {undefined}
     */
    removeFilters () {
        this.filters.replace([]);
    },
    /**
     * Adds a new filter or set of filters to the list of filters in this widget.
     * <br />TODO: A `filterFactory` may be defined on the field which may return one filter or an array of
     * filters.
     * @param  {string} args the array of arguments from the fieldchange event
     * @return {Boolean} returns false to prevent event propagation from links
     */
    addFilter () {
        const name = this.fieldValue;

        if (!name || name === '') {
            return false;
        }

        // make a new filter object with the fields used in the form
        let fieldProp;
        if (this.fields.length) {
            fieldProp = this.fields.filter((field) => {
                return field.name === name;
            })[0];
        }

        const filterObj = new Filter({
            field: fieldProp,
            name: name
        });

        this.filters.push(filterObj);


        // reset the dropdown
        this.fieldValue = '';

        return false;
    }
});

export default ViewModel;

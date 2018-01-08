import FieldIteratorMap from '../util/field/base/FieldIteratorMap';
import {makeSentenceCase} from '../util/string/string';
import {Filter, FilterList} from './Filter';

/**
 * @constructor sp-filter-builder.ViewModel ViewModel
 * @parent sp-filter-builder
 * @group sp-filter-builder.ViewModel.props Properties
 *
 * @description A `<sp-filter-builder />` component's ViewModel.
 * extends the [util/field/base/FieldIteratorMap FieldIteratorMap]'s properties
 */
const ViewModel = FieldIteratorMap.extend('FilterWidget', {
    /**
     * @prototype
     */
    /**
     * Disabled the add new form if true
     * @property {Boolean} sp-filter-builder.ViewModel.disableCreate
     * @parent sp-filter-builder.ViewModel.props
     * @inherits {util/field/base/FieldIteratorMap} FieldIteratorMap

     */
    disableCreate: 'htmlbool',
    /**
       * A string referencing a field property that will exclude that field
       * from this classes fields. The default is 'list'.
       * @property {String} sp-list-table.ViewModel.props.excludeFieldKey excludeFieldKey
       * @parent sp-list-table.ViewModel.props
       */
    excludeFieldKey: {
        value: 'filter'
    },
    /**
     * A list of filterObjects currently used in this widget
     * @property {Array<sp-filter-builder.Filter>} sp-filter-builder.ViewModel.filters
     * @parent sp-filter-builder.ViewModel.props
     */
    filters: {
        Type: FilterList,
        Value: FilterList
    },
    /**
     * The field properties for the field name dropdown
     * @property {Object} sp-filter-builder.ViewModel.nameField nameField
     * @parent sp-filter-builder.ViewModel
     */
    nameField: {
        get () {
            return this.fieldOptions.length ? {
                formatter: makeSentenceCase,
                name: 'name',
                alias: 'Field Name',
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
     * @property {Array<sp-form/fields/sp-select-field.SelectOption>} sp-filter-builder.ViewModel.fieldOptions
     * @parent sp-filter-builder.ViewModel.props
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
     * @property {String} sp-filter-builder.ViewModel.fieldValue fieldValue
     * @parent sp-filter-builder.ViewModel
     */
    fieldValue: {
        type: 'string',
        value: '_'
    },
    /**
     * Removes a filter from the list of filters
     * @function removeFilter
     * @signature
     * @param  {sp-filter-builder.Filter} obj  The object to remove. This is the only argument used by the function, the rest may be null.
     * @return {undefined}
     */
    removeFilter (obj) {
        const index = this.filters.indexOf(obj);
        this.filters.splice(index, 1);
    },
    /**
     * Replaces the filter array with an empty array, clearing all existing filters
     * @function removeFilters
     * @signature
     * @return {undefined}
     */
    removeFilters () {
        this.filters.replace([]);
    },
    /**
     * Adds a new filter or set of filters to the list of filters in this widget.
     * <br />TODO: A `filterFactory` may be defined on the field which may return one filter or an array of
     * filters.
     * @function addFilter
     * @signature
     * @param  {string} arguments the array of arguments from the fieldchange event
     * @return {Boolean} returns false to prevent event propagation from links
     */
    addFilter ([, name]) {

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

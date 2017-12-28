import Base from 'spectre-canjs/util/field/base/FieldInputMap';
import Component from 'can-component';

import '../select-field/select-field';
import {MONTH_OPTIONS, YEAR_OPTIONS} from './constants';

import template from './date-field.stache!';
import './date-field.less!';

/**
 * @constructor sp-form/fields/date-field.ViewModel ViewModel
 * @parent sp-form/fields/date-field
 * @group date-field.ViewModel.props Properties
 *
 * @description A `<date-field />` component's ViewModel
 */
export const ViewModel = Base.extend('DateField', {
    /**
     * @prototype
     */
    /**
     * The current value in the date picker field. This value is
     * a virtual property based on the month, day, and year properties
     * of this viewmodel. When it is set, it also updates the month, day,
     * and year properties of this viewmodel.
     * @property {Date} date-field.ViewModel.props.value value
     * @parent date-field.ViewModel.props
     */
    value: {
        type: 'date',
        set (date) {
            if (this.value !== date) {
                this.dispatch('fieldchange', [{
                    value: date,
                    name: this.properties.name
                }]);
            }

            // if the value is falsey, return it
            if (!date) {
                return date;
            }

            // otherwise validate the and create a new date if not valid
            if (!this.isValidDate(date)) {
                date = new Date();

                // if the set date is valid, set our dropdowns
            } else {
                this.assign({
                    day: date.getUTCDate(),
                    month: date.getUTCMonth(),
                    year: date.getUTCFullYear()
                });
            }
            return date;
        },
        get (value) {
            if (typeof this.month === 'undefined' || typeof this.day === 'undefined' ||
                !this.year) {
                return value;
            }
            const dateStr = `${this.month + 1}/${this.day}/${this.year}`;
            if (!this.isValidDate(dateStr)) {
                return new Date();
            }
            return new Date(dateStr);
        }
    },
    /**
     * The current day of the month stored in the viewmodel. The default
     * is the current day.
     * @property {Number} date-field.ViewModel.props.day day
     * @parent date-field.ViewModel.props
     */
    day: {
        type: 'number'
    },
    /**
     * The current month index stored in the viewmodel. The default is the
     * current month. Note: Months are 0 indexed.
     * @property {Number} date-field.ViewModel.props.month month
     * @parent date-field.ViewModel.props
     */
    month: {
        type: 'number'
    },
    /**
     * The current year value stored in the viewmodel. The default is the
     * current year
     * @property {Number} date-field.ViewModel.props.year year
     * @parent date-field.ViewModel.props
     */
    year: {
        type: 'number'
    },
    /**
     * The properties object for the day picker dropdown. This is created
     * dynamically based on the currently selected month and year.
     * @property {Object} date-field.ViewModel.props.dayProperties dayProperties
     * @parent date-field.ViewModel.props
     */
    dayProperties: {
        get () {
            const options = [];
            for (let i = 1; i <= this.getDaysInMonth(this.value); i++) {
                options.push({
                    value: i,
                    label: i
                });
            }
            return {
                inline: true,
                options: options,
                name: 'day'
            };
        }
    },
    /**
     * The properties object for the month picker dropdown. The default is
     * to show the 12 months.
     * @property {Object} date-field.ViewModel.props.monthProperties monthProperties
     * @parent date-field.ViewModel.props
     */
    monthProperties: {
        value: {
            inline: true,
            options: MONTH_OPTIONS,
            name: 'month'
        }
    },
    /**
     * The properties object for the year picker dropdown. The default starts at
     * 1900 and shows up till the current year.
     * @property {Object} date-field.ViewModel.props.yearProperties yearProperties
     * @parent date-field.ViewModel.props
     */
    yearProperties: {
        value: {
            inline: true,
            options: YEAR_OPTIONS,
            name: 'year'
        }
    },
    /**
     * Returns the number of days in the month of the date provided
     * @function getDaysInMonth
     * @signature
     * @param {Date} date the date to determine the number of days in the month from
     * @return {Number} the number of days in the month
     */
    getDaysInMonth (date) {
        if (!date) {
            date = new Date();
        }
        var d = new Date(date.getYear(), date.getMonth() + 1, 0);
        return d.getDate();
    },
    /**
     * Called when one of the select-field values change. Dispatches the
     * `change` event with the current date value
     * @function onChange
     * @signature `onChange()`
     */
    onChange () {
        // this.dispatch('fieldchange', [{
        //     value: this.value,
        //     name: this.properties.name
        // }]);
    },
    /**
     * Checks to see if the date is valid
     * @function isValidDate
     * @signature
     * @param {String|Date} d the date to check for validity. This can be either
     * a string like `12/12/2016` or a date object
     * @return {Boolean} whether or not the date is valid
     */
    isValidDate (d) {
        if (!d) {
            return false;
        }
        d = new Date(d);
        return (!isNaN(d.getTime()));
    }
});

export default Component.extend({
    tag: 'date-field',
    view: template,
    ViewModel: ViewModel
});

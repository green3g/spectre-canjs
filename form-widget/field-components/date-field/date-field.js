import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import CanEvent from 'can-event';
import assign from 'object-assign';

import '../select-field/select-field';
import {MONTH_OPTIONS, YEAR_OPTIONS} from './constants';


import template from './date-field.stache!';
import './date-field.less!';

/**
 * @constructor form-widget/field-components/date-field.ViewModel ViewModel
 * @parent form-widget/field-components/date-field
 * @group date-field.ViewModel.props Properties
 *
 * @description A `<date-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('DateField', {
    /**
     * @prototype
     */
    /**
     * Form field properties that define this fields behavior
     * @property {Object} date-field.ViewModel.props.properties properties
     * @parent date-field.ViewModel.props
     */
    properties: DefineMap,
    /**
     * A list of validation errors
     * @property {Array<String>} date-field.ViewModel.props.errors errors
     * @parent date-field.ViewModel.props
     */
    errors: '*',
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
            if (!this.isValidDate(date)) {
                date = new Date();
            } else {
                this.set({
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear()
                });
            }
            return date;
        },
        get () {
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
        value: new Date().getDate(),
        type: 'number'
    },
    /**
     * The current month index stored in the viewmodel. The default is the
     * current month. Note: Months are 0 indexed.
     * @property {Number} date-field.ViewModel.props.month month
     * @parent date-field.ViewModel.props
     */
    month: {
        value: new Date().getMonth(),
        type: 'number'
    },
    /**
     * The current year value stored in the viewmodel. The default is the
     * current year
     * @property {Number} date-field.ViewModel.props.year year
     * @parent date-field.ViewModel.props
     */
    year: {
        type: 'number',
        value: new Date().getFullYear()
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
     * @param {Date} date the date to determine the number of days in the month from
     * @return {Number} the number of days in the month
     */
    getDaysInMonth (date) {
        var d = new Date(date.getYear(), date.getMonth() + 1, 0);
        return d.getDate();
    },
    /**
     * Called when one of the select-field values change. Dispatches the
     * `change` event with the current date value
     * @function onChange
     */
    onChange () {
        this.dispatch('fieldchange', [{
            value: this.value,
            name: this.properties.name
        }]);
    },
    /**
     * Checks to see if the date is valid
     * @function isValidDate
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

assign(ViewModel.prototype, CanEvent);


Component.extend({
    tag: 'date-field',
    view: template,
    ViewModel: ViewModel
});

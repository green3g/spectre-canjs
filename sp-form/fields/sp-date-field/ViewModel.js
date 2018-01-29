import Base from 'spectre-canjs/util/field/Field';
import {MONTH_OPTIONS, YEAR_OPTIONS} from './constants';

/**
 * A `<sp-date-field />` component's ViewModel
 * 
 * @class ViewModel
 * @memberof sp-date-field
 * @extends Field
 */
export default Base.extend('DateField', {
    /** @lends sp-date-field.ViewModel.prototype */
    /**
     * The current value in the date picker field. This value is
     * a virtual property based on the month, day, and year properties
     * of this viewmodel. When it is set, it also updates the month, day,
     * and year properties of this viewmodel.
     * @type {Date}
     * @memberof sp-date-field.ViewModel.prototype
     */
    value: {
        type: 'date',
        set (date) {
            if (this.value !== date) {
                this.dispatch('fieldchange', [this]);
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
     * @type {Number}
     * @memberof sp-date-field.ViewModel.prototype
     */
    day: {
        type: 'number'
    },
    /**
     * The current month index stored in the viewmodel. The default is the
     * current month. Note: Months are 0 indexed.
     * @type {Number}
     * @memberof sp-date-field.ViewModel.prototype
     */
    month: {
        type: 'number'
    },
    /**
     * The current year value stored in the viewmodel. The default is the
     * current year
     * @type {Number}
     * @memberof sp-date-field.ViewModel.prototype
     */
    year: {
        type: 'number'
    },
    /**
     * The properties object for the day picker dropdown. This is created
     * dynamically based on the currently selected month and year.
     * @type {Object}
     * @memberof sp-date-field.ViewModel.prototype
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
     * @type {Object}
     * @memberof sp-date-field.ViewModel.prototype
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
     * @type {Object}
     * @memberof sp-date-field.ViewModel.prototype
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
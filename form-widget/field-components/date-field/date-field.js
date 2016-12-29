import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import CanEvent from 'can-event';
import assign from 'can-util/js/assign/assign';

import '../select-field/select-field';
import {MONTH_OPTIONS, YEAR_OPTIONS} from './constants';


import template from './date-field.stache!';
import './date-field.less!';

/**
 * @constructor form-widget/field-components/date-field.ViewModel ViewModel
 * @parent form-widget/field-components/date-field
 * @group form-widget/field-components/date-field.ViewModel.props Properties
 *
 * @description A `<date-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('DateField', {
    properties: DefineMap,
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
    day: {
        value: new Date().getDate(),
        type: 'number'
    },
    month: {
        value: new Date().getMonth(),
        type: 'number'
    },
    year: {
        type: 'number',
        value: new Date().getFullYear()
    },
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
                options: options,
                name: 'day'
            };
        }
    },
    monthProperties: {
        value: {
            options: MONTH_OPTIONS,
            name: 'month'
        }
    },
    yearProperties: {
        value: {
            options: YEAR_OPTIONS,
            name: 'year'
        }
    },
    getDaysInMonth (date) {
        var d = new Date(date.getYear(), date.getMonth() + 1, 0);
        return d.getDate();
    },
    onChange () {
        this.dispatch('change', [this.value]);
    },
    isValidDate (d) {
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

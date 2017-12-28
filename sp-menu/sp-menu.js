import Component from 'can-component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import template from './sp-menu.stache!';
import './sp-menu.less!';
import {TYPES} from './constants';

export const NavPage = DefineMap.extend('NavPage', {
    href: 'string',
    active: 'boolean',
    label: 'string'
});

export const ViewModel = DefineMap.extend('NavList', {
    init () {
        this.pages.forEach((item) => {
            if (item.active) {
                this.activate(item);
            }
        });
    },
    pages: DefineList.extend('NavItemList', {
        Map: NavPage
    }),
    type: {
        type: 'string',
        set (type) {
            return TYPES.indexOf(type) > 0 ? type : TYPES[0];
        },
        value: TYPES[0]
    },
    active: DefineMap,
    activate (item) {
        if (item === this.active) {
            return;
        }
        this.active = item;
    }
});


Component.extend({
    tag: 'sp-menu',
    ViewModel: ViewModel,
    view: template
});

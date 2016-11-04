import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import batch from 'can-event/batch/batch';
import viewModel from 'can-view-model';

import template from './nav-container.stache!';
import pageTemplate from './nav-page.stache!';
import './nav-container.less!';


let pageId = 0;
export const PageViewModel = DefineMap.extend('NavPage', {
    active: {type: 'boolean', value: false},
    label: 'string',
    loading: {type: 'htmlbool', value: false},
    pageId: {
        value: function () {
            return 'page-' + pageId ++;
        }
    },
    parent: '*'
});

export const PageList = DefineList.extend('NavPageList', {
    Map: PageViewModel
});


/**
 * @constructor tab-container.ViewModel ViewModel
 * @parent tab-container
 * @group tab-container.ViewModel.props Properties
 *
 * @description A `<tab-container />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('NavContainer', {
	// Contains a list of all page scopes within the
	// tabs element.
    pages: {Value: PageList},
    activePage: DefineMap,
    activeId: {
        set (id) {
            const pages = this.pages.filter((p) => {
                return p.pageId === id;
            });
            if (pages.length) {
                this.makeActive(pages[0]);
            }
        },
        get (val) {
            if (this.activePage) {
                return this.activePage.pageId;
            }
            return null;
        }
    },
	// When a `<page>` element is inserted into the document,
	// it calls this method to add the page's scope to the
	// pages array.
    addPage (page) {
		// If this is the first page, activate it.
        if (this.pages.length === 0) {
            this.makeActive(page);
        }
        this.pages.push(page);
    },
	// When a `<page>` element is removed from the document,
	// it calls this method to remove the page's scope from
	// the pages array.
    removePage (page) {
        var pages = this.pages;
        batch.start();
        pages.splice(pages.indexOf(page), 1);
		// if the page was active, make the first item active
        if (page === this.active) {
            if (pages.length) {
                this.makeActive(pages[0]);
            } else {
                this.active = null;
            }
        }
        batch.stop();
    },
    makeActive (page) {
        if (page === this.activePage) {
            return;
        }
        this.activePage = page;
        this.pages.each((p) => {
            p.active = false;
        });
        page.active = true;
    }
});

Component.extend({
    tag: 'nav-page',
    view: pageTemplate,
    viewModel: PageViewModel,
    events: {
        inserted: function () {
            this.viewModel.parent = viewModel(this.element.parentNode);
            if (this.viewModel.parent && this.viewModel.parent.addPage) {
                this.viewModel.parent.addPage(this.viewModel);
            }
        },
        removed: function () {
            if (this.viewModel.parent && this.viewModel.parent.removePage) {
                this.viewModel.parent.removePage(this.viewModel);
            }
            this.viewModel.parent = null;
        }
    }
});

export default Component.extend({
    tag: 'nav-container',
    viewModel: ViewModel,
    view: template,
    leakScope: true
});

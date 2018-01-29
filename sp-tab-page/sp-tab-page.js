import ViewModel from './ViewModel';
import Component from 'can-component';
import pageTemplate from './sp-tab-page.stache';
import canViewModel from 'can-view-model';

/**
 * Tab page component used in the sp-tab-container for navigation
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;"></iframe>
 * @module sp-tab-page 
 * @example 
 * <sp-tab-page /> 
 */
export default Component.extend({
    tag: 'sp-tab-page',
    view: pageTemplate,
    ViewModel: ViewModel,
    events: {
        inserted: function () {
            this.viewModel.parent = canViewModel(this.element.parentNode);
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
import ViewModel from './ViewModel';
import Component from 'can-component';
import pageTemplate from './nav-page.stache';
import canViewModel from 'can-view-model';

export default Component.extend({
    tag: 'nav-page',
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
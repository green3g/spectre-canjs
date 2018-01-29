import template from './sp-toast.stache';
import './sp-toast.less';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A hideable notification component
 * @see sp-toast-container
 * @module sp-toast
 */
Component.extend({
    tag: 'sp-toast',
    view: template,
    ViewModel: ViewModel,
    events: {
        inserted () {
            const vm = this.viewModel;
            if (vm.autoHide) {
                setTimeout(() => {
                    vm.hide();
                }, vm.autoHide);
            }
        }
    }
});

export default ViewModel;

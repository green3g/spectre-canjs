import template from './sp-toast.stache!';
import './sp-toast.less!';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * @module {can.Component} sp-toast <sp-toast />
 * @parent spectre-canjs.components
 * @outline 3
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

import template from './toast-item.stache!';
import './toast-item.less!';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * @module {can.Component} toast-item <toast-item />
 * @parent spectre.components
 * @outline 3
 */
Component.extend({
    tag: 'toast-item',
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

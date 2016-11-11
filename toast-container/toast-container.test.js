import q from 'steal-qunit';
import can 

import {ViewModel} from './alert-widget';
import {Message} from './message';

let vm;

q.module('alert-widget.ViewModel', {
    beforeEach: () => {
        vm = new ViewModel();
    },
    afterEach: () => {
        vm = null;
    }
});

test('addMessage(message)', (assert) => {
    vm.addMessage(new Message({
        message: 'alert!'
    }));
    assert.equal(vm.attr('messages').length, 1, 'message should be added');
});

test('removeMessage(message)', (assert) => {
    const m = new Message({
        message: 'alert!'
    });
    vm.addMessage(m);
    vm.removeMessage(m);
    assert.equal(vm.attr('messages').length, 0, 'message should be removed');
});

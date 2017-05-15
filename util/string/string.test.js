/* eslint-env qunit, browser */

import q from 'steal-qunit';

import {makeSentenceCase} from './string';

q.module('util/string', {
    beforeEach: () => {
    },
    afterEach: () => {
    }
});

test('makeSentenceCase', (assert) => {
    const tests = [{
        value: 'something_to_test',
        expected: 'Something to test'
    }, {
        value: '_another test',
        expected: 'Another test'
    }, {
        value: '__a_third__test___',
        expected: 'A third test'
    }];

    tests.forEach((t) => {
        assert.equal(makeSentenceCase(t.value), t.expected, 'Value should be formatted correctly');
    });
});

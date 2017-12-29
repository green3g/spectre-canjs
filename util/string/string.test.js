/* eslint-env qunit, browser */


import {makeSentenceCase} from './string';

test('makeSentenceCase', () => {
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
        expect(makeSentenceCase(t.value)).toEqual(t.expected);
    });
});

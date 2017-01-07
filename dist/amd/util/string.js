/*spectre-canjs@0.15.5#util/string*/
define([
    'exports',
    'can-util/js/string'
], function (exports, _string) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.makeSentenceCase = makeSentenceCase;
    var _string2 = _interopRequireDefault(_string);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    function makeSentenceCase(text) {
        text = String(text);
        return _string2.default.capitalize(String.prototype.trim.call(text.split('_').join(' ').toLowerCase().replace(/ +/g, ' ')));
    }
});
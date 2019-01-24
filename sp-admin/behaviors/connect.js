var connect = require('can-connect');

var constructor = require('can-connect/constructor/constructor');
var canMap = require('can-connect/can/map/map');
var canRef = require('can-connect/can/ref/ref');
var constructorStore = require('can-connect/constructor/store/store');
var dataCallbacks = require('can-connect/data/callbacks/callbacks');
var callbacksCache = require('can-connect/data/callbacks-cache/callbacks-cache');
var combineRequests = require('can-connect/data/combine-requests/combine-requests');
var localCache = require('can-connect/data/localstorage-cache/localstorage-cache');
var dataParse = require('can-connect/data/parse/parse');
var dataUrl = require('can-connect/data/url/url');
var fallThroughCache = require('can-connect/fall-through-cache/fall-through-cache');
var realTime = require('can-connect/real-time/real-time');
var callbacksOnce = require('can-connect/constructor/callbacks-once/callbacks-once');
var GLOBAL = require('can-util/js/global/global');
var totalResourceCount = require('./totalResourceCount').default;

var $ = GLOBAL().$;

module.exports = function (options) {

    var behaviors = [
        constructor,
        canMap,
        canRef,
        constructorStore,
        dataCallbacks,
        combineRequests,
        dataParse,
        dataUrl,
        realTime,
        callbacksOnce,
        totalResourceCount
    ];

    if (typeof localStorage !== 'undefined') {
        if (!options.cacheConnection) {
            options.cacheConnection = connect([localCache], {
                name: options.name + 'Cache',
                idProp: options.idProp,
                algebra: options.algebra
            });
        }
        behaviors.push(callbacksCache, fallThroughCache);
    }
    // Handles if jQuery isn't provided.
    if ($ && $.ajax) {
        options.ajax = $.ajax;
    }
    return connect(behaviors, options);
};
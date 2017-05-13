import connect from 'can-connect';

import canConstructor from 'can-connect/constructor/constructor';
import canMap from 'can-connect/can/map/map';
import canRef from 'can-connect/can/ref/ref';
import constructorStore from 'can-connect/constructor/store/store';
import dataCallbacks from 'can-connect/data/callbacks/callbacks';
import dataParse from 'can-connect/data/parse/parse';
import dataUrl from 'can-connect/data/url/url';
import realTime from 'can-connect/real-time/real-time';
import callbacksOnce from 'can-connect/constructor/callbacks-once/callbacks-once';
import totalResourceCount from './totalResourceCount';

import $ from 'jquery';

export default function (options) {

    var behaviors = [
        canConstructor,
        canMap,
        canRef,
        constructorStore,
        dataCallbacks,
        dataParse,
        dataUrl,
        realTime,
        callbacksOnce,
        totalResourceCount
    ];

    if (options.behaviors) {
        behaviors = behaviors.concat(options.behaviors);
    }

        // Handles if jQuery isn't provided.
    if ($ && $.ajax) {
        options.ajax = $.ajax;
    }

    return connect(behaviors, options);
}

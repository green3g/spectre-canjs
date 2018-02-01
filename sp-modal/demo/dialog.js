import 'spectre-canjs/sp-modal/sp-modal';
import 'spectre-canjs/sp-confirm/sp-confirm';

import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    confirm1: false,
    onAccept (args) {
        console.log('----- Confirmation Accepted ------');
        console.log(args);
    },
    onReject (args) {
        console.log('----- Confirmation Rejected ------');
        console.log(args);
    },
    showModal (name) {
        this[name] = true;
    },
    hideModal (name) {
        this[name] = false;
    }
});

document.body.appendChild(render(viewModel));

window.DEMO_SOURCE = `
import 'spectre-canjs/sp-modal/sp-modal';
import 'spectre-canjs/sp-modal/sp-confirm';

import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    modal1: false,
    modal2: false,
    modal3: false,
    confirm1: false,
    onAccept () {
        console.log('----- Confirmation Accepted ------');
        console.log(arguments);
    },
    onReject () {
        console.log('----- Confirmation Rejected ------');
        console.log(arguments);
    },
    showModal (name) {
        this[name] = true;
    },
    hideModal (name) {
        this[name] = false;
    }
});

document.body.appendChild(render(viewModel));
`

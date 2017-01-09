import 'paginate-widget/';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';

var frag = stache(document.getElementById('demo-html').innerHTML)(new DefineMap({
    page1: 0,
    page2: 0
}));

document.body.appendChild(frag);

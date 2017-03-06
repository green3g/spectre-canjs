import 'spectre-canjs/toast-container/toast-container';
import 'animate.css/animate.css';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';
import canViewModel from 'can-view-model';

const AppViewModel = new DefineMap({
    heading: 'Title Here',
    details: 'Details',
    autoHide: 5000,
    severity: 'info',
    dismissable: true,
    add () {
        canViewModel(document.getElementById('toast-container')).addToast({
            heading: this.heading,
            body: this.body,
            severity: this.severity,
            autoHide: this.autoHide,
            dismissable: this.dismissable
        });
    }
});

const render = stache.from('demo-html');
document.body.appendChild(render(AppViewModel));

window.DEMO_SOURCE = `
import 'spectre-canjs/toast-container/toast-container';
import 'animate.css/animate.css';
import DefineMap from 'can-define/map/map';
import stache from 'can-stache';
import canViewModel from 'can-view-model';

const AppViewModel = new DefineMap({
    heading: 'Title Here',
    details: 'Details',
    autoHide: 5000,
    severity: 'info',
    dismissable: true,
    add () {
        canViewModel(document.getElementById('toast-container')).addToast({
            heading: this.heading,
            body: this.body,
            severity: this.severity,
            autoHide: this.autoHide,
            dismissable: this.dismissable
        });
    }
});

const render = stache.from('demo-html');
document.body.appendChild(render(AppViewModel));
`

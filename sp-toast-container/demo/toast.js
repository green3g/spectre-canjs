import 'spectre-canjs/sp-toast-container/sp-toast-container';
import 'spectre-canjs/sp-toast/sp-toast';
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
        canViewModel('sp-toast-container').addToast({
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

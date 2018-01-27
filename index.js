import 'spectre.css/dist/spectre.css';
import 'font-awesome/css/font-awesome.css';
import 'spectre-canjs/sp-form/';
import 'spectre-canjs/sp-form/fields/sp-text-field/';
import 'spectre-canjs/sp-form/fields/sp-select-field/';
import 'spectre-canjs/sp-form/fields/sp-check-field/';
import 'spectre-canjs/sp-form/fields/sp-multi-check-field/';
import 'spectre-canjs/sp-form/fields/sp-subform-field/';
import 'spectre-canjs/util/field/Field'; 

// !steal-remove-start
import reload from 'live-reload';
reload(() => {
    for (let i = 0; i < document.body.children.length; i ++) { 
        document.body.children[i].remove(); 
    }
});
// !steal-remove-end
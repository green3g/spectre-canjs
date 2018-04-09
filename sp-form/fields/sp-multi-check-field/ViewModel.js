import SelectField from 'spectre-canjs/sp-form/fields/sp-select-field/ViewModel';
import DefineList from 'can-define/list/list';

export default SelectField.extend('CheckboxMulti', {
    value: {
        Type: DefineList,
        Default: DefineList
    },
    onChange () {
        this.dispatch('fieldchange', [this]);
    }
});

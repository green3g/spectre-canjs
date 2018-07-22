import stache from 'can-stache';

// cache pre-compiled templates
export const components = {
    edit: {}
};

export function getEditComponent (field) {
    const tag = field.editTag || 'sp-text-field';
    if (!components.edit[tag]) {
        components.edit[tag] = stache(`<${tag} properties:from="." 
            object:from="scope.vm.dirtyObject"
            value:bind="scope.vm.dirtyObject[name]" 
            error:bind="scope.vm.validationErrors[name]"
            on:fieldchange="scope.vm.checkField(scope.arguments)"></${tag}>`);
    }

    return components.edit[tag];
}


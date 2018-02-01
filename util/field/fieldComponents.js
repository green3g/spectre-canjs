import stache from 'can-stache';

// cache pre-compiled templates
export const components = {
    edit: {}
};

export function getEditComponent (field) {
    const tag = field.editTag || 'sp-text-field';
    if (!components.edit[tag]) {
        components.edit[tag] = stache(`<${tag} properties:from="." 
            value:bind="scope.root.dirtyObject[name]" 
            error:bind="scope.root.validationErrors[name]"
            on:fieldchange="scope.root.checkField(scope.arguments)"></${tag}>`);
    }

    return components.edit[tag];
}


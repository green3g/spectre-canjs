import stache from 'can-stache';

// cache pre-compiled templates
export const components = {
    edit: {}
};

export function getEditComponent (field) {
    const tag = field.editTag || 'sp-text-field';
    if (!components.edit[tag]) {
        components.edit[tag] = stache(`<${tag} properties:from="." 
            value:bind="../dirtyObject[name]" 
            error:bind="../validationErrors[name]"
            on:fieldchange="../checkField(scope.arguments)"></${tag}>`);
    }

    return components.edit[tag];
}


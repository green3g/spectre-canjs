import stache from 'can-stache';

// cache pre-compiled templates
export const components = {
    edit: {},
    display: {}
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

export function getDisplayComponent (field) {
    const tag = field.displayTag || 'default';
    if (!components.display[tag]) {
        components.display[tag] = stache('{{object[field.name]}}');
    }

    return components.display[tag];
}

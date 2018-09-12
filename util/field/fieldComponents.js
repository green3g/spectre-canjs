import stache from 'can-stache';

export function getEditComponent (field) {
    const tag = field.editTag || 'sp-text-field';
    return stache(`<${tag} properties:from="field"
        object:from="dirtyObject"
        value:bind="dirtyObject[field.name]" 
        error:bind="validationErrors[field.name]"
        on:fieldchange="checkField(scope.arguments)"></${tag}>`);
}


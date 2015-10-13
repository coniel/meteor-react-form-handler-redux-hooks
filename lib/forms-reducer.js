App.reducers.forms = function(state, action) {
    state = state || {};
    action = action || {};
    switch(action.type) {
        case InitializeForm:
            // Initialize a new form state by creating
            // an empty form object
            var newState = {};
            newState[action.formId] = {
                doc: {},
                hasErrors: false,
                errors: []
            };
            return App.utils.merge(state, newState);
        case InitializeInput:
            // Update form doc with input's default value
            var newState = {};
            var form = _.clone(state[action.formId]);
            form.doc[action.inputName] = action.value;
            newState[action.formId] = form;
            return App.utils.merge(state, newState);
        case InputChanged:
            // Update form doc with input's new value
            var newState = {};
            var form = _.clone(state[action.formId]);
            form.doc[action.inputName] = action.value;
            newState[action.formId] = form;
            return App.utils.merge(state, newState);
        default:
            return state;
    }
};
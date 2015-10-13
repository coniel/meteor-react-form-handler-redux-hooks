App.actions.forms = {};

App.actions.forms.initializeForm = function(formId) {
    return {
        type: InitializeForm,
        formId: formId
    }
};

App.actions.forms.initializeInput = function(formId, inputName, value) {
    return {
        type: InitializeInput,
        formId: formId,
        inputName: inputName,
        value: value
    }
};

App.actions.forms.inputChanged = function(formId, inputName, value) {
    return {
        type: InputChanged,
        formId: formId,
        inputName: inputName,
        value: value
    }
};